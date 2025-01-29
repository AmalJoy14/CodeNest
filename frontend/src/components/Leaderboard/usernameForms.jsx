import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from "./UsernameForms.module.css"
import Axios from "axios";
import { useEffect, useState } from "react";

const fetchUsername = async (platform) => {
  try {
    const response = await Axios.get(`http://localhost:3000/leetcode/getUsername?platform=${platform}`, { withCredentials: true });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching username:", error.response?.data || error.message);
  }
  return "";
};


const validateLeetcodeUsername = async (username) => {
  try {
    const response = await Axios.get(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    console.log(response.data);
    if (response.data.status === "success") {
      return true;
    }
    console.log(username);

    return false;
  } catch (error) {
    console.error("Error validating username:", error.response?.data || error.message);
    return false;
  }
};

export default function UsernameForms({ platform, username, onUsernameChange }) {
  const [fetchedUsername, setFetchedUsername] = useState("");
  const [toggle , setToggle] = useState(0);

  ////////////////////////////////////////////////////
  useEffect(() => {
    const getUsername = async () => {
      const data = await fetchUsername(platform);
      const username = data.username;
      const toggle = data.toggle;
      setToggle(toggle);
      setFetchedUsername(username);
      onUsernameChange(platform, username);
    };
    getUsername();
  }, [platform, onUsernameChange]);
  ////////////////////////////////////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      console.error("Username is required!");
      return;
    }
  
    // Validate the username
    const isValid = await validateLeetcodeUsername(username);
    if (!isValid) {
      console.error("Invalid LeetCode username!");
      return;
    }

    try {
      const response = await Axios.post(
        "http://localhost:3000/leetcode/addUsername",
        { platform, leetcodeUsername: username },
        { withCredentials: true }
      );
      if (response.status === 200) {
        console.log(response.data.message);
        document.getElementById(`${platform}-username`).classList.add(styles.blocked);
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
            value={username || ""}
            onChange={(e) => onUsernameChange(platform, e.target.value)}
            placeholder={`Enter your ${platform} username`}
            className={styles.input}
          />
          <button className={styles.submitBtn}><FontAwesomeIcon icon={faCheck} /></button>
        </form>
      </div>
    </div>
  )
}

