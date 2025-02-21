import { useRef, useState , useEffect} from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./profile.module.css";
import axios from "axios";
import noProfileImage from "../../assets/noProfileImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Loader from "../loader";
import ProblemChart from "./chart";

export default function Profile() {
  const [user, setUser] = useState(null);
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile/profileData", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

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

  if (!user) return <Loader/>;

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.avatar}>
              <img src={previewUrl || user.imageUrl || noProfileImage} onError={(e) => e.target.src = noProfileImage}  className={styles.avatarImage} />
              <input type="file" accept="image/png, image/jpeg" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
              <button type="button" onClick={() => fileInputRef.current.click()} className={styles.uploadButton}><FontAwesomeIcon icon={faPen} /></button>
            </div>
            <div>
              <h2 className={styles.username}>{user.username}</h2>
              <h4 className={styles.fullname}>@{user.fullname}</h4>
              <p className={styles.joinDate}>Joined on {user.createdAt}</p>
            </div>
          </div>

          

          <div className={styles.stats}>
            <div className={styles.statItem}><h3 className={styles.statTitle}>Problems Solved</h3><p className={styles.statValue}>{user.totalSolved}</p></div>
            <div className={styles.statItem}><h3 className={styles.statTitle}>Rank</h3><p className={styles.statValue}>#{user.rank}</p></div>
            <div className={styles.statItem}><h3 className={styles.statTitle}>Rating</h3><p className={styles.statValue}>{user.contestRating}</p></div>
          </div>
          <ProblemChart/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
