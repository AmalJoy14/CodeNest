'use client'

import { useEffect, useState } from 'react'
import styles from './CommunityStats.module.css'

const stats = [
  { label: 'Total Coders', value: 10000 },
  { label: 'Problems Solved', value: 500000 },
  { label: 'Active Users', value: 5000 },
]

export default function CommunityStats() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter, index) => {
          const target = stats[index].value
          const increment = Math.ceil(target / 100)
          return Math.min(counter + increment, target)
        })
      )
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h2 className={styles.title}>Community Stats</h2>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.value}>{counters[index].toLocaleString()}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

