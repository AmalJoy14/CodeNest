'use client'

import { useEffect, useState } from 'react'
import styles from './CommunityStats.module.css'
import axios from 'axios'

export default function CommunityStats() {
  const [stats, setStats] = useState([
    { label: 'Total Coders', value: -1 },
    { label: 'Problems Solved', value: -1 },
    { label: 'Active Users', value: -1 },
  ])
  const [counters, setCounters] = useState([0, 0, 0])

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/homeData")
        const data = response.data

        const fetchedStats = [
          { label: 'Total Coders', value: data.userCount },
          { label: 'Problems Solved', value: data.problemsSolved },
          { label: 'Active Users', value: data.activeUserCount },
        ]

        setStats(fetchedStats)
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    fetchStats()
  }, [])

  useEffect(() => {
    if (stats.some(stat => stat.value === -1)) return 

    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter, index) => {
          const target = stats[index].value
          const increment = Math.ceil(target / 10)
          return Math.min(counter + increment, target)
        })
      )
    }, 20)

    return () => clearInterval(interval)
  }, [stats]) 

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h2 className={styles.title}>Community Stats</h2>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.value}>
                {counters[index]?.toLocaleString()}
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
