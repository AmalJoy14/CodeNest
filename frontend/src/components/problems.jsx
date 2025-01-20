import Header from './header';
import Footer from './footer';
import styles from '../styles/Problems.module.css';

export default function Problems() {
  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', acceptance: '45%' },
    { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', acceptance: '35%' },
    { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', acceptance: '30%' },
    { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: '25%' },
    { id: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium', acceptance: '28%' },
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
        <h1 className={styles.title}>Problems</h1>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Title</th>
                <th className={styles.th}>Difficulty</th>
                <th className={styles.th}>Acceptance</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {problems.map((problem) => (
                <tr key={problem.id}>
                  <td className={styles.td}>{problem.id}</td>
                  <td className={styles.td}>{problem.title}</td>
                  <td className={`${styles.td} ${getDifficultyClass(problem.difficulty)}`}>
                    {problem.difficulty}
                  </td>
                  <td className={styles.td}>{problem.acceptance}</td>
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
