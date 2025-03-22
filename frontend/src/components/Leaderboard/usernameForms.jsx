import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faTimes} from '@fortawesome/free-solid-svg-icons';
import styles from "./UsernameForms.module.css"
import Axios from "axios";
import { useEffect, useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";


const validateLeetcodeUsername = async (username) => {
  try {
    const response = await Axios.get(
      `https://leetcode-api-faisalshohag.vercel.app/${username}`
    );
    if (response.data.matchedUser !== null) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
};

const validateCodeforcesUsername = async (username) => {
  try {
    const response = await Axios.get(
      `https://codeforces.com/api/user.info?handles=${username}`
    );
    if (response.data.status === "OK") {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export default function UsernameForms({ platform }) {
  const [content,setContent] = useState("");
  const [isPresent, setIsPresent] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    setIsInvalid(false);
  }, [platform]);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await Axios.get(`${BACKEND_URL}/platform/getUsername?platform=${platform}`, {
          withCredentials: true,
        });
        if (response.data.username) {
          setContent(response.data.username);
          setIsPresent(true);
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, [platform]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(isPresent){
      setIsPresent(false);
      return;
    }

    if (!content) {
      console.error("Username is required!");
      setIsInvalid(true);
      return;
    }
  
    // Validate the username
    let isValid = false;
    if(platform === "LeetCode")
      isValid = await validateLeetcodeUsername(content);
    else if(platform === "Codeforces")
      isValid = await validateCodeforcesUsername(content);
    
    if (!isValid) {
      console.error(`Invalid ${platform} username!`);
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    console.log(`Valid ${platform} username`);
    try {
      const response = await Axios.post(
        `${BACKEND_URL}/platform/addUsername`,
        { platform, platformUsername: content },
        { withCredentials: true }
      );
      if (response.status === 200) {
        setIsPresent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  ////////////////////////////////////////////////////

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor={`${platform}-username`}>{platform} Username:</label>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            id={`${platform}-username`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`Enter your ${platform} username`}
            className={`${styles.input} ${isPresent ? styles.blocked : ''}`}
          />
          <button className={`${styles.submitBtn} ${isPresent ? styles.cancel : ''}`}>
            <FontAwesomeIcon icon={isPresent ? faTimes : faCheck} />
          </button>
        </form>
        {isInvalid && <div className={styles.invalid}>*Invalid Username</div>}
      </div>
    </div>
  )
}

