import Header from "../header";
import Footer from "../footer";
import styles from "./problems.module.css";
import { useNavigate } from "react-router-dom";

 function Problems() {
  const topics = [
    { id: 1, title: "Array / String", link: "./array-string", solved: "0 / 6" },
    { id: 2, title: "Two Pointers", link: "./two-pointers", solved: "0 / 7" },
    { id: 3, title: "Hash Map", link: "./hashmap", solved: "0 / 7" },
    { id: 4, title: "Sliding Window", link: "./sliding-window", solved: "0 / 11" },
    { id: 5, title: "Stack", link: "./stack", solved: "0 / 15" },
    { id: 6, title: "Binary Search", link: "./binary-search", solved: "0 / 7" },
    { id: 7, title: "Linked List", link: "./linked-list", solved: "0 / 9" },
    { id: 8, title: "Trees", link: "./trees", solved: "0 / 3" },
    { id: 9, title: "Heap", link: "./heap", solved: "0 / 13" },
    { id: 10, title: "Backtracking", link: "./backtracking", solved: "0 / 6" },
    { id: 11, title: "Trie", link: "./trie", solved: "0 / 12" },
    { id: 12, title: "Graphs", link: "./graphs", solved: "0 / 11" },
    { id: 13, title: "1D Dynamic programming", link: "./dynamic-programming1", solved: "0 / 8" },
    { id: 14, title: "2D Dynamic programming", link: "./dynamic-programming2", solved: "0 / 6" },
    { id: 15, title: "Greedy", link: "./greedy", solved: "0 / 8" },
    { id: 16, title: "Intervals", link: "./intervals", solved: "0 / 7" },
    { id: 17, title: "Bit Manipulation", link: "./bit-manipulation", solved: "0 / 0" },
    { id: 18, title: "Math and geometry", link: "./math-geometry", solved: "0 / 0" },
  ];

  const navigate = useNavigate();

  const handleRowClick = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Problems</h1>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Topic</th>
                <th className={styles.th}>Solved</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {topics.map((topic) => (
                <tr
                  key={topic.id}
                  className={styles.row}
                  onClick={() => handleRowClick(topic.link)}
                >
                  <td className={styles.td}>{topic.id}</td>
                  <td className={styles.cell}>{topic.title}</td>
                  <td className={styles.td}>{topic.solved}</td>
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

export default Problems;