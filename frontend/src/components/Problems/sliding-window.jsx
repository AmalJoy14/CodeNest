import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function SlidingWindow() {
  const questions = [
    { id: 1, title: 'Best Time to Buy And Sell Stock', difficulty: 'Easy', acceptance: '70%', solutionLink: 'https://youtu.be/1pkOgXD63yU' },
    { id: 2, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', acceptance: '55%', solutionLink: 'https://youtu.be/wiGpQwVHdE0' },
    { id: 3, title: 'Longest Repeating Character Replacement', difficulty: 'Medium', acceptance: '48%', solutionLink: 'https://youtu.be/gqXU1UyA8pk' },
    { id: 4, title: 'Permutation In String', difficulty: 'Medium', acceptance: '52%', solutionLink: 'https://youtu.be/UbyhOgBN834' },
    { id: 5, title: 'Minimum Window Substring', difficulty: 'Hard', acceptance: '40%', solutionLink: 'https://youtu.be/jSto0O4AJbM' },
    { id: 6, title: 'Sliding Window Maximum', difficulty: 'Hard', acceptance: '38%', solutionLink: 'https://youtu.be/DfljaUwZsOk' },
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
        <h1 className={styles.title}>Sliding Window</h1>
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
                    <Link className={styles.link} to={`/problems/sliding-window/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
