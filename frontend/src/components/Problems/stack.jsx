import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg'

export default function Stack() {
  const questions = [
    { id: 1, title: 'Valid Parentheses', difficulty: 'Easy', acceptance: '65%' },
    { id: 2, title: 'Min Stack', difficulty: 'Medium', acceptance: '50%' },
    { id: 3, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', acceptance: '45%' },
    { id: 4, title: 'Generate Parentheses', difficulty: 'Medium', acceptance: '55%' },
    { id: 5, title: 'Daily Temperatures', difficulty: 'Medium', acceptance: '60%' },
    { id: 6, title: 'Car Fleet', difficulty: 'Medium', acceptance: '52%' },
    { id: 7, title: 'Largest Rectangle In Histogram', difficulty: 'Hard', acceptance: '40%' },
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
