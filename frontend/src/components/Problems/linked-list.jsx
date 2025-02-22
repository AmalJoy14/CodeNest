import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function LinkedList() {
  const questions = [
    { id: 1, title: 'Reverse Linked List', difficulty: 'Easy', acceptance: '73%', solutionLink: 'https://youtu.be/G0_I-ZF0S38' },
    { id: 2, title: 'Merge Two Sorted Lists', difficulty: 'Easy', acceptance: '78%', solutionLink: 'https://youtu.be/XIdigk956u0' },
    { id: 3, title: 'Linked List Cycle', difficulty: 'Easy', acceptance: '81%', solutionLink: 'https://youtu.be/gBTe7lFR3vc' },
    { id: 4, title: 'Reorder List', difficulty: 'Medium', acceptance: '65%', solutionLink: 'https://youtu.be/S5bfdUTrKLM' },
    { id: 5, title: 'Remove Nth Node From End of List', difficulty: 'Medium', acceptance: '68%', solutionLink: 'https://youtu.be/XVuQxVej6y8' },
    { id: 6, title: 'Copy List With Random Pointer', difficulty: 'Medium', acceptance: '62%', solutionLink: 'https://youtu.be/5Y2EiZST97Y' },
    { id: 7, title: 'Add Two Numbers', difficulty: 'Medium', acceptance: '67%', solutionLink: 'https://youtu.be/wgFPrzTjm7s' },
    { id: 8, title: 'Find The Duplicate Number', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/wjYnzkAhcNk' },
    { id: 9, title: 'LRU Cache', difficulty: 'Medium', acceptance: '58%', solutionLink: 'https://youtu.be/7ABFKPK2hD4' },
    { id: 10, title: 'Merge K Sorted Lists', difficulty: 'Hard', acceptance: '48%', solutionLink: 'https://youtu.be/q5a5OiGbT6Q' },
    { id: 11, title: 'Reverse Nodes In K Group', difficulty: 'Hard', acceptance: '45%', solutionLink: 'https://youtu.be/1UOPsfP85V4' },
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
        <h1 className={styles.title}>Linked List</h1>
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
                    <Link className={styles.link} to={`/problems/LinkedList/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
