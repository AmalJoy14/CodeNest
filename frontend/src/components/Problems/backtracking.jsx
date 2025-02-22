import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function Backtracking() {
  const questions = [
    { id: 1, title: 'Subsets', difficulty: 'Medium', acceptance: '63%', solutionLink: 'https://youtu.be/REOH22Xwdkk' },
    { id: 2, title: 'Combination Sum', difficulty: 'Medium', acceptance: '59%', solutionLink: 'https://youtu.be/GBKI9VSKdGg' },
    { id: 3, title: 'Combination Sum II', difficulty: 'Medium', acceptance: '62%', solutionLink: 'https://youtu.be/FOyRpNUSFeA' },
    { id: 4, title: 'Permutations', difficulty: 'Medium', acceptance: '67%', solutionLink: 'https://youtu.be/FZe0UqISmUw' },
    { id: 5, title: 'Subsets II', difficulty: 'Medium', acceptance: '65%', solutionLink: 'https://youtu.be/Vn2v6ajA7U0' },
    { id: 6, title: 'Word Search', difficulty: 'Medium', acceptance: '61%', solutionLink: 'https://youtu.be/pfiQ_PS1g8E' },
    { id: 7, title: 'Palindrome Partitioning', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/3jvWodd7ht0' },
    { id: 8, title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', acceptance: '60%', solutionLink: 'https://youtu.be/0snEunUacZY' },
    { id: 9, title: 'N Queens', difficulty: 'Hard', acceptance: '52%', solutionLink: 'https://youtu.be/Ph95IHmRp5M' },
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
        <h1 className={styles.title}>Backtracking</h1>
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
                    <Link className={styles.link} to={`/problems/Backtracking/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
