import Header from './header';
import Footer from './footer';
import styles from '../styles/Problems.module.css';
import { Link } from 'react-router-dom';

export default function Problems() {
  const topics = [
    { id: 1, title: 'Array / String', link: '/Problems/array-string' },
    { id: 2, title: 'Two Pointers', link: '/Problems/two-pointers' },
    { id: 3, title: 'Hash Map', link: '/Problems/hashmap' },
    { id: 4, title: 'Sliding Window', link: '/Problems/sliding-window' },
    { id: 5, title: 'Stack', link: '/Problems/stack' },
    { id: 6, title: 'Binary Search', link: '/Problems/binary-search' },
    { id: 7, title: 'Linked List', link: '/Problems/linked-list' },
    { id: 8, title: 'Trees', link: '/Problems/trees' },
    { id: 9, title: 'Heap', link: '/Problems/heap' },
    { id: 10, title: 'Backtracking', link: '/Problems/backtracking' },
    { id: 11, title: 'Trie', link: '/Problems/trie' },
    { id: 12, title: 'Graphs', link: '/Problems/graphs' },
    { id: 13, title: '1D Dynamic programming', link: '/Problems/dynamic-programming1' },
    { id: 14, title: '2D Dynamic programming', link: '/Problems/dynamic-programming2' },
    { id: 15, title: 'Greedy', link: '/Problems/greedy' },
    { id: 16, title: 'Intervals', link: '/Problems/intervals' },
    { id: 17, title: 'Bit Manipulation', link: '/Problems/bit-manipulation' },
    { id: 18, title: 'Math and geometry', link: '/Problems/math-geometry' },
    /*{ id: 3, title: 'Sliding Window', link: '/Problems/sliding-window' },
    { id: 4, title: 'Matrix', link: '/Problems/matrix' },
    { id: 5, title: 'Hash Map', link: '/Problems/hash-map' },
    { id: 6, title: 'Intervals', link: '/Problems/intervals' },
    { id: 7, title: 'Stack', link: '/Problems/stack' },
    { id: 8, title: 'Linked List', link: '/Problems/linked-list' },
    { id: 9, title: 'Binary Tree General', link: '/Problems/binary-tree-general' },
    { id: 10, title: 'Binary Tree BFS', link: '/Problems/binary-tree-bfs' },
    { id: 11, title: 'Binary Search Tree', link: '/Problems/binary-search-tree' },
    { id: 12, title: 'Graph General', link: '/Problems/graph-general' },
    { id: 13, title: 'Graph BFS', link: '/Problems/graph-bfs' },
    { id: 14, title: 'Trie', link: '/Problems/trie' },
    { id: 15, title: 'Backtracking', link: '/Problems/backtracking' },
    { id: 16, title: 'Divide & Conquer', link: '/Problems/divide-and-conquer' },
    { id: 17, title: '1D DP', link: '/Problems/1d-dp' },
     */
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
