import { useState } from "react"
import styles from "./QuestionPage.module.css"
import CodeEditor from "./codeEditor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck , faList} from "@fortawesome/free-solid-svg-icons"
import topicsData from "./Topics/topicsData"
import { useParams } from "react-router-dom"

const sampleQuestion = {
  title: "Two Sum",
  difficulty: "Easy",
  description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.`,
  defaultCode: ``,
  testCases: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
  ],
}

export default function QuestionPage() {
  const { topicId, questionId } = useParams();


  const topic = topicsData.find(t => 
    t.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-') === topicId
  );

  
  const problem = topic.problems.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, "-") === questionId
  );


  const [code, setCode] = useState(sampleQuestion.defaultCode)
  const [testResults, setTestResults] = useState(null)
  const [isSolved, setIsSolved] = useState(false)
  const [language, setLanguage] = useState('javascript');

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

  const handleRunCode = () => {
    console.log("Running code:", code)
    setTestResults({
      status: "success",
      output: "[0,1]",
      runtime: "76 ms",
      memory: "42.1 MB",
    })
  }

  const handleSubmit = () => {
    console.log("Submitting code:", code)
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
            <h3 className={styles.testcaseHeader}>Test Results:</h3>
            {testResults && (
              <div className={styles.testcaseContent}>
                <div className={styles.testcaseItem}>
                  <div className={styles.testcaseLabel}>Status:</div>
                  <div className={styles.testcaseValue}>{testResults.status}</div>
                </div>
                <div className={styles.testcaseItem}>
                  <div className={styles.testcaseLabel}>Output:</div>
                  <div className={styles.testcaseValue}>{testResults.output}</div>
                </div>
                <div className={styles.testcaseItem}>
                  <div className={styles.testcaseLabel}>Runtime:</div>
                  <div className={styles.testcaseValue}>{testResults.runtime}</div>
                </div>
                <div className={styles.testcaseItem}>
                  <div className={styles.testcaseLabel}>Memory:</div>
                  <div className={styles.testcaseValue}>{testResults.memory}</div>
                </div>
              </div>
            )}
            {!testResults && (
              <div className={styles.notestcaseSection}><p className={styles.testcaseLabel}>You must run your code first</p></div>
            )}
          </div>
        
        
      </div>
    </div>
  )
}

