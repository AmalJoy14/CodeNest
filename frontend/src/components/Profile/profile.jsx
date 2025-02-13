import { useRef, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import styles from "./profile.module.css";
import axios from "axios";
import noProfileImage from "../../assets/noProfileImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
  const user = { username: "CodeMaster", joinDate: "January 1, 2023", problemsSolved: 120, rank: 1, points: 1500 };
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post("http://localhost:3000/profile/profileupload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
    } catch (error) {
      console.error("Upload failed:", error);
    }
    
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.avatar}>
              <img src={previewUrl || noProfileImage}  className={styles.avatarImage} />
              <input type="file" accept="image/png, image/jpeg" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
              <button type="button" onClick={() => fileInputRef.current.click()} className={styles.uploadButton}><FontAwesomeIcon icon={faPen} /></button>
            </div>
            <div>
              <h2 className={styles.username}>{user.username}</h2>
              <p className={styles.joinDate}>Joined on {user.joinDate}</p>
            </div>
          </div>

          

          <div className={styles.stats}>
            <div className={styles.statItem}><h3 className={styles.statTitle}>Problems Solved</h3><p className={styles.statValue}>{user.problemsSolved}</p></div>
            <div className={styles.statItem}><h3 className={styles.statTitle}>Rank</h3><p className={styles.statValue}>#{user.rank}</p></div>
            <div className={styles.statItem}><h3 className={styles.statTitle}>Points</h3><p className={styles.statValue}>{user.points}</p></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
