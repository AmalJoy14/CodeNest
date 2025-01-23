import React from "react"
import styles from "./UsernameForms.module.css"

export default function UsernameForms({ platform, username, onUsernameChange }) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor={`${platform}-username`}>{platform} Username:</label>
        <input
          type="text"
          id={`${platform}-username`}
          value={username}
          onChange={(e) => onUsernameChange(platform, e.target.value)}
          placeholder={`Enter your ${platform} username`}
          className={styles.input}
        />
      </div>
    </div>
  )
}

