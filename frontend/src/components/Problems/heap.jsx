import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg'
export default function Heap() {
  const questions = [
    { "id": 1, "title": "Kth Largest Element In a Stream", "difficulty": "Easy", "acceptance": "80%" },
    { "id": 2, "title": "Last Stone Weight", "difficulty": "Easy", "acceptance": "78%" },
    { "id": 3, "title": "K Closest Points to Origin", "difficulty": "Medium", "acceptance": "63%" },
    { "id": 4, "title": "Kth Largest Element In An Array", "difficulty": "Medium", "acceptance": "68%" },
    { "id": 5, "title": "Task Scheduler", "difficulty": "Medium", "acceptance": "64%" },
    { "id": 6, "title": "Design Twitter", "difficulty": "Medium", "acceptance": "60%" },
    { "id": 7, "title": "Find Median From Data Stream", "difficulty": "Hard", "acceptance": "48%" }
  ];

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

  return (
    <div className={styles.container}>
      <Header /> 
      <main className={styles.main}>
        <h1 className={styles.title}>Heap</h1>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Title</th>
                <th className={styles.th}>Difficulty</th>
                <th className={styles.th}>Acceptance</th>
                <th className= {styles.th}>Solution</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td className={styles.td}>{question.id}</td>
                  <td className={styles.td}>
                    <Link className={styles.link}to={`/problems/Heap/${question.title.toLowerCase().replace(/ /g, '-')}`}>
                      {question.title}
                    </Link>
                  </td>
                  <td className={`${styles.td} ${getDifficultyClass(question.difficulty)}`}>
                    {question.difficulty}
                  </td>
                  <td className={styles.td}>{question.acceptance}</td>
                  <td className={styles.sol}>
                    <img src={camicon} alt="Camera icon" className={styles.camera} width="24" height="24" />
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
