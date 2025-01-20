import styles from '../../styles/Home/Features.module.css'

const features = [
  {
    title: 'Competitive Programming',
    description: 'Track and improve your problem-solving skills.',
    icon: '🏆',
  },
  {
    title: 'Leaderboards',
    description: 'Compete with peers and rise to the top.',
    icon: '📊',
  },
  {
    title: 'Collaboration',
    description: 'Connect with like-minded coders within your college.',
    icon: '🤝',
  },
]

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Platform Features</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

