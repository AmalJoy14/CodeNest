import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function MathAndGeometry() {
  const questions = [
    { id: 1, title: 'Rotate Image', difficulty: 'Medium', acceptance: '68%', solutionLink: 'https://youtu.be/qMPX1AOa83k' },
    { id: 2, title: 'Spiral Matrix', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/5Km3utixwZs' },
    { id: 3, title: 'Set Matrix Zeroes', difficulty: 'Medium', acceptance: '62%', solutionLink: 'https://youtu.be/RyBM56RIWrM' },
    { id: 4, title: 'Happy Number', difficulty: 'Easy', acceptance: '85%', solutionLink: 'https://youtu.be/UcoN6UjAI64' },
    { id: 5, title: 'Plus One', difficulty: 'Easy', acceptance: '82%', solutionLink: 'https://youtu.be/WnPLSRLSANE' },
    { id: 6, title: 'Pow(x, n)', difficulty: 'Medium', acceptance: '61%', solutionLink: 'https://youtu.be/gVUrDV4tZfY' },
    { id: 7, title: 'Multiply Strings', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/HAgLH58IgJQ' },
    { id: 8, title: 'Detect Squares', difficulty: 'Medium', acceptance: '60%' },
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
        <h1 className={styles.title}>Math and Geometry</h1>
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
                    <Link className={styles.link} to={`/problems/MathAndGeometry/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
