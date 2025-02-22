import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function OneDDynamicProgramming() {
  const questions = [
    { id: 1, title: 'Climbing Stairs', difficulty: 'Easy', acceptance: '82%', solutionLink: 'https://youtu.be/Y0lT9Fck7qI' },
    { id: 2, title: 'Min Cost Climbing Stairs', difficulty: 'Easy', acceptance: '79%', solutionLink: 'https://youtu.be/ktmzAZWkEZ0' },
    { id: 3, title: 'House Robber', difficulty: 'Medium', acceptance: '68%', solutionLink: 'https://youtu.be/73r3KWiEvyk' },
    { id: 4, title: 'House Robber II', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/rWAJCfYYOvM' },
    { id: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium', acceptance: '62%', solutionLink: 'https://youtu.be/XYQecbcd6_c' },
    { id: 6, title: 'Palindromic Substrings', difficulty: 'Medium', acceptance: '60%', solutionLink: 'https://youtu.be/4RACzI5-du8' },
    { id: 7, title: 'Decode Ways', difficulty: 'Medium', acceptance: '66%', solutionLink: 'https://youtu.be/6aEyTjOwlJU' },
    { id: 8, title: 'Coin Change', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/H9bfqozjoqs' },
    { id: 9, title: 'Maximum Product Subarray', difficulty: 'Medium', acceptance: '61%', solutionLink: 'https://youtu.be/lXVy6YWFcRM' },
    { id: 10, title: 'Word Break', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/Sx9NNgInc3A' },
    { id: 11, title: 'Longest Increasing Subsequence', difficulty: 'Medium', acceptance: '58%', solutionLink: 'https://youtu.be/cjWnW0hdF1Y' },
    { id: 12, title: 'Partition Equal Subset Sum', difficulty: 'Medium', acceptance: '59%', solutionLink: 'https://youtu.be/IsvocB5BJhw' },
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
        <h1 className={styles.title}>1D Dynamic Programming</h1>
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
                    <Link className={styles.link} to={`/problems/1D-Dynamic-Programming/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
