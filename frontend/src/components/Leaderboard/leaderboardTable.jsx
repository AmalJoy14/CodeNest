import React, { useEffect, useState } from "react"
import { fetchLeaderboardData } from "./api"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import styles from "./leaderboardTable.module.css"
import Loader from "../loader"
import noProfileImage from "../../assets/noProfileImage.png"

export default function LeaderboardTable({ platform }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const leaderboardData = await fetchLeaderboardData(platform)
      const sortedData = leaderboardData.sort((a, b) => b.contestRating - a.contestRating);
      console.log(sortedData);
      setData(sortedData);
      setLoading(false)
    }
    loadData()
  }, [platform])

  if (loading) {
    return <div className={styles.loading}><Loader/></div>
  }

  return (
    <div className={styles.main}>
    <div className={styles.tableContainer}>
      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.cell}>Rank</div>
          <div className={styles.cell}>Fullname</div>
          <div className={styles.cell}>Username</div>
          <div className={styles.cell}>Contest Rating</div>
          <div className={styles.cell}>Problems Solved</div>
        </div>
        <div className={styles.body}>
          {data.map((entry, index) => {
            const rankClass = [styles.gold, styles.silver, styles.bronze][index] || "";
            return(
              <div key={index} className={`${styles.row} ${entry.highlight ? styles.box : ""}`}>  
                <span className={styles.span2}></span>
                <span className={styles.span1}></span>
                <span className={styles.span2}></span>
                <span className={styles.span1}></span>
                {index === 0 && <div className={styles.crown} ><FontAwesomeIcon icon={faCrown}/></div>}
                <div className={`${styles.cell} ${rankClass}`}>{index + 1}</div>
                <div className={`${styles.cell} ${styles.specialcell}`}>
                  <div className={styles.avatar}><img src={entry.imageUrl || noProfileImage}  onError={(e) => e.target.src = noProfileImage} className={styles.avatarImage} /></div>
                  <div >{entry.fullname}</div>
                </div>
                <div className={styles.cell}>{entry.platformUsername}</div>
                <div className={styles.cell}>{entry.contestRating}</div>
                <div className={styles.cell}>{entry.totalSolved}</div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
    </div>
  )
}

