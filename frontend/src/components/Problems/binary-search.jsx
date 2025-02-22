import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function BinarySearch() {
  const questions = [
    { id: 1, title: 'Binary Search', difficulty: 'Easy', acceptance: '80%', solutionLink: 'https://youtu.be/s4DPM8ct1pI' },
    { id: 2, title: 'Search a 2D Matrix', difficulty: 'Medium', acceptance: '65%', solutionLink: 'https://youtu.be/Ber2pi2C0j0' },
    { id: 3, title: 'Koko Eating Bananas', difficulty: 'Medium', acceptance: '58%', solutionLink: 'https://youtu.be/U2SozAs9RzA' },
    { id: 4, title: 'Find Minimum In Rotated Sorted Array', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/nIVW4P8b1VA' },
    { id: 5, title: 'Search In Rotated Sorted Array', difficulty: 'Medium', acceptance: '57%', solutionLink: 'https://youtu.be/U8XENwh8Oy8' },
    { id: 6, title: 'Time Based Key Value Store', difficulty: 'Medium', acceptance: '52%', solutionLink: 'https://youtu.be/fu2cD_6E8Hw' },
    { id: 7, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: '44%', solutionLink: 'https://youtu.be/q6IEA26hvXc' },
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
        <h1 className={styles.title}>Binary Search</h1>
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
                    <Link className={styles.link} to={`/problems/BinarySearch/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
