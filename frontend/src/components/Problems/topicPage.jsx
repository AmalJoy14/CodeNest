import { useParams, useNavigate } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import topicsData from './Topics/topicsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';


export default function TopicPage() {
  const { topicId } = useParams();

  const topic = topicsData.find(t => 
    t.title.toLowerCase().replace(/ /g, '-') === topicId
  );


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

const navigate = useNavigate();
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
                <th>Title</th>
                <th>Difficulty</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              {topic.problems.map((problem) => (
                <tr onClick={() => handleRowClick(`/problems/${topicId}/${problem.title.toLowerCase().replace(/ /g, "-")}`)} key={problem.id}>
                  <td>{problem.id}</td>
                  <td>
                    {/* <Link className={styles.link} to={`/problems/${topicId}/${problem.title.toLowerCase().replace(/ /g, '-')}`}> */}
                      {problem.title}
                    {/* </Link> */}
                  </td>
                  <td className={getDifficultyClass(problem.difficulty)}>{problem.difficulty}</td>
                  <td className={styles.sol}>
                  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className = {styles.camera} icon={faVideo} /></a>
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
