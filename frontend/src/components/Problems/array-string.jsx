import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function ArrayString() {
  const questions = [
    { id: 1, title: 'Contains Duplicate', difficulty: 'Easy', acceptance: '60%', solutionLink: 'https://youtu.be/3OamzN90kPg' },
    { id: 2, title: 'Valid Anagram', difficulty: 'Easy', acceptance: '50%', solutionLink: 'https://youtu.be/9UtInBqnCgA' },
    { id: 3, title: 'Two Sum', difficulty: 'Easy', acceptance: '45%', solutionLink: 'https://youtu.be/KLlXCFG5TnA' },
    { id: 4, title: 'Group anagrams', difficulty: 'Hard', acceptance: '35%', solutionLink: 'https://youtu.be/vzdNOK2oB2E' },
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
        <h1 className={styles.title}>Array / String</h1>
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
                    <Link className={styles.link} to={`/problems/array-string/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
