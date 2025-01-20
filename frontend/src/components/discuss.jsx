import Header from './header';
import Footer from './footer';
import styles from '../styles/discuss.module.css';

export default function Discuss() {
  const discussions = [
    { id: 1, title: 'Tips for solving dynamic programming problems', author: 'DPMaster', replies: 15, views: 230 },
    { id: 2, title: 'How to approach system design questions', author: 'ArchitectPro', replies: 22, views: 456 },
    { id: 3, title: 'Best resources for learning graph algorithms', author: 'GraphGuru', replies: 8, views: 178 },
    { id: 4, title: 'Strategies for optimizing runtime complexity', author: 'SpeedDemon', replies: 19, views: 302 },
    { id: 5, title: 'Common mistakes in coding interviews and how to avoid them', author: 'InterviewAce', replies: 31, views: 589 },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Discuss</h1>
        <div className={styles.discussionBox}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search discussions..."
              className={styles.searchInput}
            />
          </div>
          <ul className={styles.discussionList}>
            {discussions.map((discussion) => (
              <li key={discussion.id} className={styles.discussionItem}>
                <a href="#" className={styles.discussionLink}>
                  <h3 className={styles.discussionTitle}>{discussion.title}</h3>
                  <div className={styles.discussionDetails}>
                    <span className={styles.detailItem}>By {discussion.author}</span>
                    <span className={styles.detailItem}>{discussion.replies} replies</span>
                    <span>{discussion.views} views</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
