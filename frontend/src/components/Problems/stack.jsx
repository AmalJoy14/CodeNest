import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function Stack() {
  const questions = [
    { id: 1, title: 'Valid Parentheses', difficulty: 'Easy', acceptance: '65%', solutionLink: 'https://youtu.be/WTzjTskDFMg' },
    { id: 2, title: 'Min Stack', difficulty: 'Medium', acceptance: '50%', solutionLink: 'https://youtu.be/qkLl7nAwDPo' },
    { id: 3, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', acceptance: '45%', solutionLink: 'https://youtu.be/iu0082c4HDE' },
    { id: 4, title: 'Generate Parentheses', difficulty: 'Medium', acceptance: '55%', solutionLink: 'https://youtu.be/s9fokUqJ76A' },
    { id: 5, title: 'Daily Temperatures', difficulty: 'Medium', acceptance: '60%', solutionLink: 'https://youtu.be/cTBiBSnjO3c' },
    { id: 6, title: 'Car Fleet', difficulty: 'Medium', acceptance: '52%', solutionLink: 'https://youtu.be/Pr6T-3yB9RM' },
    { id: 7, title: 'Largest Rectangle In Histogram', difficulty: 'Hard', acceptance: '40%', solutionLink: 'https://youtu.be/zx5Sw9130L0' },
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
        <h1 className={styles.title}>Stack</h1>
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
                    <Link className={styles.link} to={`/problems/stack/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
