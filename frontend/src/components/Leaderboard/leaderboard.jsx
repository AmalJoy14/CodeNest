import  Header  from '../Header'
import  Footer  from '../Footer'
import React, { useState } from "react"
import UsernameForms from "./usernameForms"
import LeaderboardTable from "./leaderboardTable.jsx"
import styles from "./leaderboard.module.css"

import leetcodeLogo from "../../assets/leetcode_logo.png"
import codeforcesLogo from "../../assets/codeforces_logo.png"
import codenestLogo from "../../assets/b-logo.svg"

const platforms = ["LeetCode", "Codeforces", "CodeNest"]
const logoMap = {
  LeetCode: leetcodeLogo,
  Codeforces: codeforcesLogo,
  CodeNest: codenestLogo,
}

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("LeetCode")
  const [usernames, setUsernames] = useState({
    LeetCode: "",
    Codeforces: "",
    CodeNest: "",
  })

  const handleUsernameChange = (platform, username) => {
    setUsernames((prevUsernames) => ({
      ...prevUsernames,
      [platform]: username,
    }))
  }

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
              <div className={styles.iconbox} >
                <img src={logoMap[platform]} className={styles.icon} />
              </div>

              {platform}
            </button>
          ))}
        
      </div>
      {activeTab !== "CodeNest" && ( <UsernameForms platform={activeTab} username={usernames[activeTab]} onUsernameChange={handleUsernameChange} />)}
      <LeaderboardTable platform={activeTab} />
      <Footer />
    </div>
  )
}

