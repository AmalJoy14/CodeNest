import Header from '../header';
import Footer from '../footer';
import styles from '../../styles/topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function TwoDDynamicProgramming() {
  const questions = [
    { id: 1, title: 'Unique Paths', difficulty: 'Medium', acceptance: '72%' },
    { id: 2, title: 'Longest Common Subsequence', difficulty: 'Medium', acceptance: '65%' },
    { id: 3, title: 'Best Time to Buy And Sell Stock With Cooldown', difficulty: 'Medium', acceptance: '60%' },
    { id: 4, title: 'Coin Change II', difficulty: 'Medium', acceptance: '67%' },
    { id: 5, title: 'Target Sum', difficulty: 'Medium', acceptance: '64%' },
    { id: 6, title: 'Interleaving String', difficulty: 'Medium', acceptance: '62%' },
    { id: 7, title: 'Longest Increasing Path In a Matrix', difficulty: 'Hard', acceptance: '59%' },
    { id: 8, title: 'Distinct Subsequences', difficulty: 'Hard', acceptance: '56%' },
    { id: 9, title: 'Edit Distance', difficulty: 'Medium', acceptance: '66%' },
    { id: 10, title: 'Burst Balloons', difficulty: 'Hard', acceptance: '53%' },
    { id: 11, title: 'Regular Expression Matching', difficulty: 'Hard', acceptance: '50%' }
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
        <h1 className={styles.title}>2D Dynamic Programming</h1>
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
                    <Link className={styles.link} to={`/problems/2D-Dynamic-Programming/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
