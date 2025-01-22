import Header from '../header';
import Footer from '../footer';
import styles from '../../styles/topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg'
export default function Trees() {
  const questions = [
    
    { "id": 1, "title": "Invert Binary Tree", "difficulty": "Easy", "acceptance": "85%" },
    { "id": 2, "title": "Maximum Depth of Binary Tree", "difficulty": "Easy", "acceptance": "82%" },
    { "id": 3, "title": "Diameter of Binary Tree", "difficulty": "Easy", "acceptance": "80%" },
    { "id": 4, "title": "Balanced Binary Tree", "difficulty": "Easy", "acceptance": "83%" },
    { "id": 5, "title": "Same Tree", "difficulty": "Easy", "acceptance": "88%" },
    { "id": 6, "title": "Subtree of Another Tree", "difficulty": "Easy", "acceptance": "75%" },
    { "id": 7, "title": "Lowest Common Ancestor of a Binary Search Tree", "difficulty": "Medium", "acceptance": "70%" },
    { "id": 8, "title": "Binary Tree Level Order Traversal", "difficulty": "Medium", "acceptance": "65%" },
    { "id": 9, "title": "Binary Tree Right Side View", "difficulty": "Medium", "acceptance": "68%" },
    { "id": 10, "title": "Count Good Nodes In Binary Tree", "difficulty": "Medium", "acceptance": "64%" },
    { "id": 11, "title": "Validate Binary Search Tree", "difficulty": "Medium", "acceptance": "66%" },
    { "id": 12, "title": "Kth Smallest Element In a Bst", "difficulty": "Medium", "acceptance": "67%" },
    { "id": 13, "title": "Construct Binary Tree From Preorder And Inorder Traversal", "difficulty": "Medium", "acceptance": "60%" },
    { "id": 14, "title": "Binary Tree Maximum Path Sum", "difficulty": "Hard", "acceptance": "48%" },
    { "id": 15, "title": "Serialize And Deserialize Binary Tree", "difficulty": "Hard", "acceptance": "42%" }
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
                <th className= {styles.th}>Solution</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td className={styles.td}>{question.id}</td>
                  <td className={styles.td}>
                    <Link className={styles.link}to={`/problems/Trees/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
