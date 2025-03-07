import Header from "../header";
import Footer from "../footer";
import styles from "./problems.module.css";
import { useNavigate } from "react-router-dom";
import topicsData from "./Topics/topicsData"; 
import { useState , useEffect } from "react";
import axios from "axios";

function Problems() {
  const navigate = useNavigate();
  const [solvedCounts, setSolvedCounts] = useState({});

  const handleRowClick = (link) => {
    navigate(link);
  };

  useEffect(() => {
    const fetchSolvedProblems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/problems/countSolved", {
          withCredentials: true, 
        });
        const solvedProblems = response.data;

        const counts = {};
        solvedProblems.forEach(({ topic }) => {
          counts[topic] = (counts[topic] || 0) + 1;
        });

        setSolvedCounts(counts);
      } catch (error) {
        console.error("Error fetching solved problems:", error);
      }
    };
    fetchSolvedProblems();
  }, []);

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
                    {`${solvedCounts[topic.id] || 0} / ${topic.total}`}
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
