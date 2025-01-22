import Header from '../header';
import Footer from '../footer';
import styles from '../../styles/topics.module.css';
import { Link } from 'react-router-dom';
import camicon from '../../assets/cam.svg'
export default function LinkedList() {
  const questions = [
    { "id": 1, "title": "Reverse Linked List", "difficulty": "Easy", "acceptance": "73%" },
    { "id": 2, "title": "Merge Two Sorted Lists", "difficulty": "Easy", "acceptance": "78%" },
    { "id": 3, "title": "Linked List Cycle", "difficulty": "Easy", "acceptance": "81%" },
    { "id": 4, "title": "Reorder List", "difficulty": "Medium", "acceptance": "65%" },
    { "id": 5, "title": "Remove Nth Node From End of List", "difficulty": "Medium", "acceptance": "68%" },
    { "id": 6, "title": "Copy List With Random Pointer", "difficulty": "Medium", "acceptance": "62%" },
    { "id": 7, "title": "Add Two Numbers", "difficulty": "Medium", "acceptance": "67%" },
    { "id": 8, "title": "Find The Duplicate Number", "difficulty": "Medium", "acceptance": "64%" },
    { "id": 9, "title": "LRU Cache", "difficulty": "Medium", "acceptance": "58%" },
    { "id": 10, "title": "Merge K Sorted Lists", "difficulty": "Hard", "acceptance": "48%" },
    { "id": 11, "title": "Reverse Nodes In K Group", "difficulty": "Hard", "acceptance": "45%" },
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
                <th className= {styles.th}>Solution</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td className={styles.td}>{question.id}</td>
                  <td className={styles.td}>
                    <Link className={styles.link}to={`/problems/LinkedList/${question.title.toLowerCase().replace(/ /g, '-')}`}>
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
