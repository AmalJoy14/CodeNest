import Header from '../header';
import Footer from '../footer';
import styles from './topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg';

export default function Trees() {
  const questions = [
    { id: 1, title: 'Invert Binary Tree', difficulty: 'Easy', acceptance: '85%', solutionLink: 'https://youtu.be/OnSn2XEQ4MY' },
    { id: 2, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', acceptance: '82%', solutionLink: 'https://youtu.be/hTM3phVI6YQ' },
    { id: 3, title: 'Diameter of Binary Tree', difficulty: 'Easy', acceptance: '80%', solutionLink: 'https://youtu.be/K81C31ytOZE' },
    { id: 4, title: 'Balanced Binary Tree', difficulty: 'Easy', acceptance: '83%', solutionLink: 'https://youtu.be/QfJsau0ItOY' },
    { id: 5, title: 'Same Tree', difficulty: 'Easy', acceptance: '88%', solutionLink: 'https://youtu.be/vRbbcKXCxOw' },
    { id: 6, title: 'Subtree of Another Tree', difficulty: 'Easy', acceptance: '75%', solutionLink: 'https://youtu.be/E36O5SWp-LE' },
    { id: 7, title: 'Lowest Common Ancestor of a Binary Search Tree', difficulty: 'Medium', acceptance: '70%', solutionLink: 'https://youtu.be/gs2LMfuOR9k' },
    { id: 8, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', acceptance: '65%', solutionLink: 'https://youtu.be/6ZnyEApgFYg' },
    { id: 9, title: 'Binary Tree Right Side View', difficulty: 'Medium', acceptance: '68%', solutionLink: 'https://youtu.be/d4zLyf32e3I' },
    { id: 10, title: 'Count Good Nodes In Binary Tree', difficulty: 'Medium', acceptance: '64%', solutionLink: 'https://youtu.be/7cp5imvDzl4' },
    { id: 11, title: 'Validate Binary Search Tree', difficulty: 'Medium', acceptance: '66%', solutionLink: 'https://youtu.be/s6ATEkipzow' },
    { id: 12, title: 'Kth Smallest Element In a Bst', difficulty: 'Medium', acceptance: '67%', solutionLink: 'https://youtu.be/5LUXSvjmGCw' },
    { id: 13, title: 'Construct Binary Tree From Preorder And Inorder Traversal', difficulty: 'Medium', acceptance: '60%', solutionLink: 'https://youtu.be/ihj4IQGZ2zc' },
    { id: 14, title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', acceptance: '48%', solutionLink: 'https://youtu.be/Hr5cWUld4vU' },
    { id: 15, title: 'Serialize And Deserialize Binary Tree', difficulty: 'Hard', acceptance: '42%', solutionLink: 'https://youtu.be/u4JAi2JJhI8' },
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
        <h1 className={styles.title}>Trees</h1>
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
                    <Link className={styles.link} to={`/problems/Trees/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
