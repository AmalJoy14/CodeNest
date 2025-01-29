import React, { useEffect, useState } from "react"
import { fetchLeaderboardData } from "../../api"
import styles from "./leaderboardTable.module.css"
import Loader from "../Loader"

export default function LeaderboardTable({ platform }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const leaderboardData = await fetchLeaderboardData(platform)
      const sortedData = leaderboardData.sort((a, b) => b.contestRating - a.contestRating)
      setData(sortedData)
      setLoading(false)
    }
    loadData()
  }, [platform])

  if (loading) {
    return <div className={styles.loading}><Loader/></div>
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Contest Rating</th>
            <th>Problems Solved</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry.username}>
              <td>{index + 1}</td>
              <td>{entry.fullname}</td>
              <td>{entry.username}</td>
              <td>{entry.contestRating}</td>
              <td>{entry.problemsSolved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

