import  Header  from './header'
import  Footer  from './footer'
import styles from '../styles/profile.module.css'

export default function Profile() {
  const user = {
    username: 'CodeMaster',
    joinDate: 'January 1, 2023',
    problemsSolved: 120,
    rank: 1,
    points: 1500,
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>User Profile</h1>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.avatar}>{user.username[0]}</div>
            <div>
              <h2 className={styles.username}>{user.username}</h2>
              <p className={styles.joinDate}>Joined on {user.joinDate}</p>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3 className={styles.statTitle}>Problems Solved</h3>
              <p className={styles.statValue}>{user.problemsSolved}</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statTitle}>Rank</h3>
              <p className={styles.statValue}>#{user.rank}</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statTitle}>Points</h3>
              <p className={styles.statValue}>{user.points}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

