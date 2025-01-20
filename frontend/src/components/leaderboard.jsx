import  Header  from './header.jsx'
import  Footer  from './footer.jsx'
import styles from '../styles/leaderboard.module.css'

export default function Leaderboard() {
  const topUsers = [
    { rank: 1, username: 'CodeMaster', points: 1500, solved: 120 },
    { rank: 2, username: 'AlgoNinja', points: 1450, solved: 115 },
    { rank: 3, username: 'ByteWizard', points: 1400, solved: 110 },
    { rank: 4, username: 'DataDragon', points: 1350, solved: 105 },
    { rank: 5, username: 'LogicLion', points: 1300, solved: 100 },
  ]

  return (
    <div className={styles.leaderboard_container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Leaderboard</h1>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Points</th>
                <th>Problems Solved</th>
              </tr>
            </thead>
            <tbody>
              {topUsers.map((user) => (
                <tr key={user.rank}>
                  <td>{user.rank}</td>
                  <td>{user.username}</td>
                  <td>{user.points}</td>
                  <td>{user.solved}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  )
}

