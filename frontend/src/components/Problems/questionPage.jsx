import { useState , useEffect} from "react"
import styles from "./questionPage.module.css"
import CodeEditor from "./codeEditor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck , faVideo , faXmark , faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import topicsData from "./Topics/topicsData"
import { useParams } from "react-router-dom"
import axios from "axios"
import commentOutCode from "./commentOut.js"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";


export default function QuestionPage() {
  const { topicId, questionId } = useParams();

  const topic = topicsData.find(t => 
    t.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-') === topicId
  );

  
  const problem = topic.problems.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, "-") === questionId
  );

  const [language, setLanguage] = useState('javascript');
  const [videoLink, setVideoLink] = useState(null);
  const [code, setCode] = useState(() => commentOutCode(problem.defaultCode, language));
  const [testResults, setTestResults] = useState(null)
  const [isSolved, setIsSolved] = useState(false);
  const [selectedTestCase, setSelectedTestCase] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("languageChange", { detail: language }));
  }, [language]);

  useEffect(() => {
    setCode(commentOutCode(problem.defaultCode, language));
  }, [language]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // assume <768px is mobile/tablet
    };
  
    checkScreenSize(); // check once at start
    window.addEventListener('resize', checkScreenSize); // check on resize
  
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  const languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'C++', value: 'cpp' },
    { label: 'Java', value: 'java' },
    { label: 'Go', value: 'go' },
    { label: 'Rust', value: 'rust' }
  ];

  const handleCodeChange = (value) => {
    setCode(value)
  }

  const handleRunCode = async () => {

    if (!code.trim()) {
      console.log("Code is empty, not running.");
      return null;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/judge0/run`, { 
        sourceCode: code, 
        language, 
        problemId: questionId
      },
      { withCredentials: true },
      );

      const resultData = response.data;
      console.log(resultData);
      
      
      if (response.data) {
        
        const firstErrorIndex = resultData.findIndex(result => result.status.description !== "Accepted");
        console.log("testcase " , (firstErrorIndex + 1));

        const firstError = firstErrorIndex !== -1 ? resultData[firstErrorIndex] : null;

        if (firstError) {
          setTestResults([{
              id: firstError.status.id,
              status: firstError.status.description,
              compile_output: firstError.compile_output || null,
              runtime: `${(firstError.time ? firstError.time * 1000 : 0) > 1000 ? "1000+" : (firstError.time || 0) * 1000} ms`,
              memory: `${((firstError.memory || 0) / 1024).toFixed(2)} MB`,
              stderr: firstError.stderr || null,
              stdout: firstError.stdout || null,
              expected_output: firstError.testCase.output,
              input: firstError.testCase.input
          }]);
        } else {
            setTestResults(resultData.map((result,index) => ({
                id: result.status.id,
                status: result.status.description,
                compile_output: result.compile_output || null,
                runtime: `${(result.time ? result.time * 1000 : 0) > 1000 ? "1000+" : (result.time || 0) * 1000} ms`,
                memory: `${((result.memory || 0) / 1024).toFixed(2)} MB`,
                stderr: result.stderr || null,
                stdout: result.stdout || null,
                expected_output: result.testCase.output,
                input: result.testCase.input,
                index: index + 1
            })));
        }
        return resultData;
      }
    } catch (error) {
      console.error("Error running code:", error);
      setTestResults({ status: "Error", output: "Failed to execute code" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    const result = await handleRunCode();
    if(result === null) return
    const allAccepted = result.every(test => test.status.description === "Accepted");

    if (allAccepted) {
        try {
            const response = await axios.post(`${BACKEND_URL}/judge0/submit`, { 
                problemId: questionId,
                topicId: topic.id
            }, { withCredentials: true });
            if(response.status === 200) setIsSolved(true);
        } catch (error) {
            console.error("Error submitting solution:", error);
        }
    }
  };


  useEffect(() => {
    const checkIfSolved = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/judge0/isSolved/${questionId}`, 
        { withCredentials: true });
  
        setIsSolved(response.data.solved); 
      } catch (error) {
        console.error("Error checking problem status:", error);
      }
    };

    checkIfSolved();
  }, []);

  if (isMobile) {
    return (
      <div style={{
        display: 'flex', 
        height: '100vh', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: '14px', 
      }}>
        Please open this page on a computer for full functionality.
      </div>
    );
  }


  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.problemHeader}>
          <h1 className={styles.title}>{problem.title}</h1>
          <span className={`${styles.difficulty} ${styles[problem.difficulty]}`}>
            {problem.difficulty}
          </span>
          {isSolved && <div className={styles.solved} style={{ color: "#2cbb5d" }}><FontAwesomeIcon icon={faCircleCheck} /> Solved</div>}
        </div>

        <pre className={styles.description}>{problem.description}</pre>
        {problem.image && <img className={styles.problemImage} src={problem.image} alt="image"  />}

        <div className={styles.testcaseSection}>
          <h3 className={styles.testcaseHeader}>Example Test Cases:</h3>
          {problem.testCases.map((testCase, index) => (
            <div key={index} className={styles.testcaseContent}>
              <h4 className={styles.testcaseHeader}>Example {index + 1}</h4>
              {testCase.image && <img src={testCase.image} alt="image"  />}
              <div className={styles.testcaseItem}>
                <div className={styles.testcaseLabel}>Input:</div>
                <div className={styles.testcaseValue}>{testCase.input}</div>
              </div>
              <div className={styles.testcaseItem}>
                <div className={styles.testcaseLabel}>Output:</div>
                <div className={styles.testcaseValue}>{testCase.output}</div>
              </div>
              {testCase.explanation && (
                <div className={styles.testcaseItem}>
                  <div className={styles.testcaseLabel}>Explanation:</div>
                  <pre className={styles.testcaseValue}>{testCase.explanation}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
        <h3 className={styles.constraint}>Constraints</h3>
        <ul className={styles.constraints}>
          {problem.constraints.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
        <h3 className={styles.solution}>Solution : <FontAwesomeIcon className={styles.camera} icon={faVideo} onClick={(e) => (e.stopPropagation(), setVideoLink(problem.solutionLink))} style={{ cursor: "pointer" }} /></h3>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.buttonContainer}>
          <div className={styles.language}>
            <select id="languageSelect" value={language} onChange={(e) => setLanguage(e.target.value)} className={styles.dropdown}>
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.btnGrp}>
            <button className={`${styles.button} ${styles.runButton}`} onClick={handleRunCode}>
              Run Code
            </button>
            <button className={`${styles.button} ${styles.submitButton}`} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <div className={styles.editorContainer}>
          <CodeEditor code={code} onCodeChange={handleCodeChange} language={language} />
        </div>

          <div className={styles.testcaseSection}>
            <h3 className={styles.testResultsHeader}>Test Results:</h3>
            {testResults && !isLoading && (
              <div className={styles.testcaseContent}>

                {/* TLE & wrong answer*/}
                {testResults[0].compile_output === null && testResults[0].stderr === null && (testResults[0].id === 5 || testResults[0].id === 4) &&
                <div>
                  <div className={styles.testcaseItem}>
                    <div className={styles.testcaseLabel}>Status:</div>
                    <div className={`${styles.testcaseValue} ${styles.errorMessage}`}>{testResults[0].status}</div>
                  </div>
                  {testResults[0].id === 4 && <div className={styles.testcaseItem}>
                    <div className={styles.testcaseLabel}>Input:</div>
                    <div className={styles.testcaseValue}>{testResults[0].input}</div>
                  </div>}
                  {testResults[0].stdout && <div className={styles.testcaseItem}>
                    <div className={styles.testcaseLabel}>Output:</div>
                    <div className={styles.testcaseValue}>{testResults[0].stdout}</div>
                  </div>}
                  {testResults[0].id === 4 && <div className={styles.testcaseItem}>
                    <div className={styles.testcaseLabel}>Expected Output:</div>
                    <div className={styles.testcaseValue}>{testResults[0].expected_output}</div>
                  </div>}
                  <div className={styles.testcaseItem}>
                    <div className={styles.testcaseLabel}>Runtime:</div>
                    <div className={styles.testcaseValue}>{testResults[0].runtime}</div>
                  </div>
                  <div className={styles.testcaseItem}>
                    <div className={styles.testcaseLabel}>Memory:</div>
                    <div className={styles.testcaseValue}>{testResults[0].memory}</div>
                  </div>
                </div>
                }

                {/* Error */}
                {(testResults[0].compile_output || testResults[0].stderr ) ? (
                  <div className={styles.testcaseItem}>
                    <div className={styles.errorMessage}>{testResults[0].compile_output || testResults[0].stderr}</div>
                  </div>
                ) : null}   

                {/* Success */}
                {testResults[0].id === 3 && (
                  <div className={styles.testcaseList}>

                    {selectedTestCase === null && testResults.map((test, index) => (
                      <div key={index} className={styles.testcaseRow} onClick={() => setSelectedTestCase(index)}>
                        <FontAwesomeIcon color = "#2ceb5d" icon={faCircleCheck} /> Testcase {index + 1}
                      </div>
                    ))}

                    {selectedTestCase !== null && (
                      <div className={styles.testcaseDetails}>
                        <FontAwesomeIcon className={styles.backButton} onClick={() => setSelectedTestCase(null)} icon={faArrowLeft} />
                        <h4 className={styles.testcaseHeader}>Testcase {selectedTestCase + 1}</h4>
                        <div className={styles.testcaseItem}>
                          <div className={styles.testcaseLabel}>Input:</div>
                          <div className={styles.testcaseValue}>{testResults[selectedTestCase].input}</div>
                        </div>
                        <div className={styles.testcaseItem}>
                          <div className={styles.testcaseLabel}>Output:</div>
                          <div className={styles.testcaseValue}>{testResults[selectedTestCase].stdout}</div>
                        </div>
                        <div className={styles.testcaseItem}>
                          <div className={styles.testcaseLabel}>Expected Output:</div>
                          <div className={styles.testcaseValue}>{testResults[selectedTestCase].expected_output}</div>
                        </div>
                        <div className={styles.testcaseItem}>
                          <div className={styles.testcaseLabel}>Runtime:</div>
                          <div className={styles.testcaseValue}>{testResults[selectedTestCase].runtime}</div>
                        </div>
                        <div className={styles.testcaseItem}>
                          <div className={styles.testcaseLabel}>Memory:</div>
                          <div className={styles.testcaseValue}>{testResults[selectedTestCase].memory}</div>
                        </div>
                      </div>
                    )}
                  </div>
                )}  

              </div>
            )}

            {isLoading && <div className={styles.loaderContainer}><div className={styles.spinner}></div></div>}

            {!testResults && !isLoading && (
              <div className={styles.notestcaseSection}><p className={styles.testcaseLabel}>You must run your code first</p></div>
            )}
          </div>
        
        
      </div>
      {videoLink && (
        <div className={styles.videoOverlay}>
          <div className={styles.videoContainer}>
            <button className={styles.closeButton} onClick={() => setVideoLink(null)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <iframe width="800" height="450" src={`${videoLink}?rel=0`}  title="Solution Video"  frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

