import Header from "../header";
import Footer from "../footer";
import styles from "./problems.module.css";
import { useNavigate } from "react-router-dom";
import topicsData from "./Topics/topicsData"; 

function Problems() {
  const navigate = useNavigate();

  const handleRowClick = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Problems</h1>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Topic</th>
                <th className={styles.th}>Solved</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>

              {topicsData.map((topic) => (
                <tr
                  key={topic.id}
                  className={styles.row}
                  onClick={() => handleRowClick(`./${topic.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, "-")}`)}
                >
                  <td className={styles.td}>{topic.id}</td>
                  <td className={styles.cell}>{topic.title}</td>
                  <td className={styles.td}>
                    {`0 / ${topic.total}`} {/* Update solved count dynamically when needed */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Problems;
