import Header from '../header';
import Footer from '../footer';
import styles from '../../styles/topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function Greedy() {
  const questions = [
    { id: 1, title: 'Maximum Subarray', difficulty: 'Medium', acceptance: '70%' },
    { id: 2, title: 'Jump Game', difficulty: 'Medium', acceptance: '68%' },
    { id: 3, title: 'Jump Game II', difficulty: 'Medium', acceptance: '65%' },
    { id: 4, title: 'Gas Station', difficulty: 'Medium', acceptance: '62%' },
    { id: 5, title: 'Hand of Straights', difficulty: 'Medium', acceptance: '60%' },
    { id: 6, title: 'Merge Triplets to Form Target Triplet', difficulty: 'Medium', acceptance: '63%' },
    { id: 7, title: 'Partition Labels', difficulty: 'Medium', acceptance: '67%' },
    { id: 8, title: 'Valid Parenthesis String', difficulty: 'Medium', acceptance: '64%' }
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
        <h1 className={styles.title}>Greedy</h1>
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
                    <Link className={styles.link} to={`/problems/Greedy/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
