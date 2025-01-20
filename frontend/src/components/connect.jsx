import Header from './header';
import Footer from './footer';
import styles from '../styles/Connect.module.css';

export default function Connect() {
  const users = [
    { id: 1, name: 'Alice Johnson', title: 'Frontend Developer', college: 'Tech University' },
    { id: 2, name: 'Bob Smith', title: 'Backend Engineer', college: 'Code College' },
    { id: 3, name: 'Charlie Brown', title: 'Full Stack Developer', college: 'Programming Institute' },
    { id: 4, name: 'Diana Lee', title: 'Data Scientist', college: 'Analytics Academy' },
    { id: 5, name: 'Ethan Davis', title: 'Mobile App Developer', college: 'App University' },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Connect with Peers</h1>
        <div className={styles.userGrid}>
          {users.map((user) => (
            <div key={user.id} className={styles.userCard}>
              <div className={styles.userHeader}>
                <div className={styles.avatar}>{user.name[0]}</div>
                <div>
                  <h3 className={styles.userName}>{user.name}</h3>
                  <p className={styles.userTitle}>{user.title}</p>
                </div>
              </div>
              <p className={styles.userCollege}>College: {user.college}</p>
              <button className={styles.connectButton}>Connect</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
