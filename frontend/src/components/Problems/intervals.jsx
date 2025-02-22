import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function Intervals() {
  const questions = [
    { id: 1, title: 'Insert Interval', difficulty: 'Medium', acceptance: '70%', solutionLink: 'https://youtu.be/A8NUOmlwOlM' },
    { id: 2, title: 'Merge Intervals', difficulty: 'Medium', acceptance: '68%', solutionLink: 'https://youtu.be/44H3cEC2fFM' },
    { id: 3, title: 'Non Overlapping Intervals', difficulty: 'Medium', acceptance: '65%', solutionLink: 'https://youtu.be/nONCGxWoUfM' },
    { id: 4, title: 'Meeting Rooms', difficulty: 'Easy', acceptance: '75%', solutionLink: 'https://youtu.be/PaJxqZVPhbg' },
    { id: 5, title: 'Meeting Rooms II', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/FdzJmTCVyJU' },
    { id: 6, title: 'Minimum Interval to Include Each Query', difficulty: 'Hard', acceptance: '58%', solutionLink: 'https://youtu.be/5hQ5WWW5awQ' },
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
        <h1 className={styles.title}>Intervals</h1>
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
                    <Link className={styles.link} to={`/problems/Intervals/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
