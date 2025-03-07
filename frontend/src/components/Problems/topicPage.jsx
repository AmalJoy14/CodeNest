import { useParams, useNavigate } from 'react-router-dom';
import React, { useState , useEffect } from 'react';
import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import topicsData from './Topics/topicsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo , faXmark , faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


export default function TopicPage() {
  const [solvedProblems, setSolvedProblems] = useState(new Set());
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [videoLink, setVideoLink] = useState(null);

  const topic = topicsData.find(t => 
    t.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, "-") === topicId
  );


  useEffect(() => {
    const fetchSolvedProblems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/problems/solved", { withCredentials: true });
        setSolvedProblems(new Set(response.data.solvedProblems)); 
      } catch (error) {
        console.error("Error fetching solved problems:", error);
      }
    };
  
    fetchSolvedProblems();
  }, []);

const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
    case 'Easy':
        return styles.easy;
    case 'Medium':
        return styles.medium;
    case 'Hard':
        return styles.hard;
    default:
        return '';
    }
};


const handleRowClick = (link) => {
  navigate(link);
};


  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{topic.title}</h1>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th></th>
                <th>Title</th>
                <th>Difficulty</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              {topic.problems.map((problem) => (
                <tr onClick={() => handleRowClick(`/problems/${topicId}/${problem.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, "-")}`)} key={problem.id}>
                  <td>{problem.id}</td>
                  <td className={styles.solved}>{solvedProblems.has(problem.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, "-")) && <FontAwesomeIcon icon={faCircleCheck} />}</td>
                  <td>{problem.title}</td>
                  <td className={getDifficultyClass(problem.difficulty)}>{problem.difficulty}</td>
                  <td className={styles.sol}>
                  {problem.solutionLink && <FontAwesomeIcon className={styles.camera} icon={faVideo} onClick={(e) => (e.stopPropagation(), setVideoLink(problem.solutionLink))} style={{ cursor: "pointer" }} />}
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
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

      </main>
      <Footer />
    </div>
  );
}
