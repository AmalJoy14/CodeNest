import Header from '../header';
import Footer from '../footer';
import styles from './problems.module.css';
import { Link } from 'react-router-dom';

export default function Problems() {
  const topics = [
    { id: 1, title: 'Array / String', link: './array-string' },
    { id: 2, title: 'Two Pointers', link: './two-pointers' },
    { id: 3, title: 'Hash Map', link: './hashmap' },
    { id: 4, title: 'Sliding Window', link: './sliding-window' },
    { id: 5, title: 'Stack', link: './stack' },
    { id: 6, title: 'Binary Search', link: './binary-search' },
    { id: 7, title: 'Linked List', link: './linked-list' },
    { id: 8, title: 'Trees', link: './trees' },
    { id: 9, title: 'Heap', link: './heap' },
    { id: 10, title: 'Backtracking', link: './backtracking' },
    { id: 11, title: 'Trie', link: './trie' },
    { id: 12, title: 'Graphs', link: './graphs' },
    { id: 13, title: '1D Dynamic programming', link: './dynamic-programming1' },
    { id: 14, title: '2D Dynamic programming', link: './dynamic-programming2' },
    { id: 15, title: 'Greedy', link: './greedy' },
    { id: 16, title: 'Intervals', link: './intervals' },
    { id: 17, title: 'Bit Manipulation', link: './bit-manipulation' },
    { id: 18, title: 'Math and geometry', link: './math-geometry' },
  ];

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
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {topics.map((topic) => (
                <tr key={topic.id}>
                  <td className={styles.td}>{topic.id}</td>
                  <td className={styles.td}>
                    <Link to={topic.link} className={styles.link}>{topic.title}</Link>
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
