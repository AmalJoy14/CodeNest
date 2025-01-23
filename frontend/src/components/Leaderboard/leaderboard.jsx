import  Header  from '../header.jsx'
import  Footer  from '../footer.jsx'
import React, { useState } from "react"
import LeaderboardTable from "./leaderboardTable.jsx"
import styles from "./leaderboard.module.css"

const platforms = ["LeetCode", "Codeforces", "CodeNest"]

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("LeetCode")

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Leaderboard</h1>
      <div className={styles.tabs}>
        
          {platforms.map((platform) => (
            <button
              key={platform}
              className={`${styles.tab} ${activeTab === platform ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(platform)}
            >
              {platform}
            </button>
          ))}
        
      </div>
      <LeaderboardTable platform={activeTab} />
      <Footer />
    </div>
  )
}

