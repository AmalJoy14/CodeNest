import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function Heap() {
  const questions = [
    { id: 1, title: 'Kth Largest Element In a Stream', difficulty: 'Easy', acceptance: '80%', solutionLink: 'https://youtu.be/hOjcdrqMoQ8' },
    { id: 2, title: 'Last Stone Weight', difficulty: 'Easy', acceptance: '78%', solutionLink: 'https://youtu.be/B-QCq79-Vfw' },
    { id: 3, title: 'K Closest Points to Origin', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/rI2EBUEMfTk' },
    { id: 4, title: 'Kth Largest Element In An Array', difficulty: 'Medium', acceptance: '68%', solutionLink: 'https://youtu.be/XEmy13g1Qxc' },
    { id: 5, title: 'Task Scheduler', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/s8p8ukTyA2I' },
    { id: 6, title: 'Design Twitter', difficulty: 'Medium', acceptance: '60%', solutionLink: 'https://youtu.be/pNichitDD2E' },
    { id: 7, title: 'Find Median From Data Stream', difficulty: 'Hard', acceptance: '48%', solutionLink: 'https://youtu.be/itmhHWaHupI' },
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
                <th className={styles.th}>Solution</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td className={styles.td}>{question.id}</td>
                  <td className={styles.td}>
                    <Link className={styles.link} to={`/problems/Heap/${question.title.toLowerCase().replace(/ /g, '-')}`}>
                      {question.title}
                    </Link>
                  </td>
                  <td className={`${styles.td} ${getDifficultyClass(question.difficulty)}`}>
                    {question.difficulty}
                  </td>
                  <td className={styles.td}>{question.acceptance}</td>
                  <td className={styles.sol}>
                    <a 
                      href={question.solutionLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img src={camicon} alt="Camera icon" className={styles.camera} width="24" height="24" />
                    </a>
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
