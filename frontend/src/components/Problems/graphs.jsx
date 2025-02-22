import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function Graphs() {
  const questions = [
    { id: 1, title: 'Number of Islands', difficulty: 'Medium', acceptance: '68%', solutionLink: 'https://youtu.be/pV2kpPD66nE' },
    { id: 2, title: 'Max Area of Island', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/iJGr1OtmH0c' },
    { id: 3, title: 'Clone Graph', difficulty: 'Medium', acceptance: '62%', solutionLink: 'https://youtu.be/mQeF6bN8hMk' },
    { id: 4, title: 'Walls And Gates', difficulty: 'Medium', acceptance: '61%', solutionLink: 'https://youtu.be/e69C6xhiSQE' },
    { id: 5, title: 'Rotting Oranges', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/y704fEOx0s0' },
    { id: 6, title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', acceptance: '60%', solutionLink: 'https://youtu.be/s-VkcjHqkGI' },
    { id: 7, title: 'Surrounded Regions', difficulty: 'Medium', acceptance: '67%', solutionLink: 'https://youtu.be/9z2BunfoZ5Y' },
    { id: 8, title: 'Course Schedule', difficulty: 'Medium', acceptance: '66%', solutionLink: 'https://youtu.be/EgI5nU9etnU' },
    { id: 9, title: 'Course Schedule II', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/Akt3glAwyfY' },
    { id: 10, title: 'Graph Valid Tree', difficulty: 'Medium', acceptance: '59%', solutionLink: 'https://youtu.be/bXsUuownnoQ' },
    { id: 11, title: 'Number of Connected Components In An Undirected Graph', difficulty: 'Medium', acceptance: '57%', solutionLink: 'https://youtu.be/8f1XPm4WOUc' },
    { id: 12, title: 'Redundant Connection', difficulty: 'Medium', acceptance: '58%', solutionLink: 'https://youtu.be/1lNK80tOTfc' },
    { id: 13, title: 'Word Ladder', difficulty: 'Hard', acceptance: '54%', solutionLink: 'https://youtu.be/h9iTnkgv05E' },
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
        <h1 className={styles.title}>Graphs</h1>
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
                    <Link className={styles.link} to={`/problems/Graphs/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
