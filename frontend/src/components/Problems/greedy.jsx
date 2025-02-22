import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function Greedy() {
  const questions = [
    { id: 1, title: 'Maximum Subarray', difficulty: 'Medium', acceptance: '70%', solutionLink: 'https://youtu.be/5WZl3MMT0Eg' },
    { id: 2, title: 'Jump Game', difficulty: 'Medium', acceptance: '68%', solutionLink: 'https://youtu.be/Yan0cv2cLy8' },
    { id: 3, title: 'Jump Game II', difficulty: 'Medium', acceptance: '65%', solutionLink: 'https://youtu.be/dJ7sWiOoK7g' },
    { id: 4, title: 'Gas Station', difficulty: 'Medium', acceptance: '62%', solutionLink: 'https://youtu.be/lJwbPZGo05A' },
    { id: 5, title: 'Hand of Straights', difficulty: 'Medium', acceptance: '60%', solutionLink: 'https://youtu.be/amnrMCVd2YI' },
    { id: 6, title: 'Merge Triplets to Form Target Triplet', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/kShkQLQZ9K4' },
    { id: 7, title: 'Partition Labels', difficulty: 'Medium', acceptance: '67%', solutionLink: 'https://youtu.be/B7m8UmZE-vw' },
    { id: 8, title: 'Valid Parenthesis String', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/QhPdNS143Qg' }
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
        <h1 className={styles.title}>Greedy</h1>
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
                    <Link className={styles.link} to={`/problems/Greedy/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
