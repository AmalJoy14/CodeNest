import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function BitManipulation() {
  const questions = [
    { id: 1, title: 'Single Number', difficulty: 'Easy', acceptance: '78%', solutionLink: 'https://youtu.be/fMSJSS7eO1w' },
    { id: 2, title: 'Number of 1 Bits', difficulty: 'Easy', acceptance: '82%', solutionLink: 'https://youtu.be/BJnMZNwUk1M' },
    { id: 3, title: 'Counting Bits', difficulty: 'Easy', acceptance: '80%', solutionLink: 'https://youtu.be/T41rL0L3Pnw' },
    { id: 4, title: 'Reverse Bits', difficulty: 'Easy', acceptance: '77%', solutionLink: 'https://youtu.be/ljz85bxOYJ0' },
    { id: 5, title: 'Missing Number', difficulty: 'Easy', acceptance: '81%', solutionLink: 'https://youtu.be/jIaA8boiG1s' },
    { id: 6, title: 'Sum of Two Integers', difficulty: 'Medium', acceptance: '65%', solutionLink: 'https://youtu.be/g9YQyYi4IQQ' },
    { id: 7, title: 'Reverse Integer', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/1vZswirL8Y8' },
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
