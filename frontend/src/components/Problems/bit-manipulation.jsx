import Header from '../header';
import Footer from '../footer';
import styles from '../../styles/topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function BitManipulation() {
  const questions = [
    { id: 1, title: 'Single Number', difficulty: 'Easy', acceptance: '78%' },
    { id: 2, title: 'Number of 1 Bits', difficulty: 'Easy', acceptance: '82%' },
    { id: 3, title: 'Counting Bits', difficulty: 'Easy', acceptance: '80%' },
    { id: 4, title: 'Reverse Bits', difficulty: 'Easy', acceptance: '77%' },
    { id: 5, title: 'Missing Number', difficulty: 'Easy', acceptance: '81%' },
    { id: 6, title: 'Sum of Two Integers', difficulty: 'Medium', acceptance: '65%' },
    { id: 7, title: 'Reverse Integer', difficulty: 'Medium', acceptance: '63%' }
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
        <h1 className={styles.title}>Bit Manipulation</h1>
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
                    <Link className={styles.link} to={`/problems/Bit-Manipulation/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
