import React from "react";
import styles from "../styles/loader.module.css";

const Loader = ({ size = 100 }) => {
  return (
    <div className={styles.mainContainer} >
      <div className={styles.spinnerContainer} style={{ width: size, height: size }}>
        <div className={styles.spinner}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
          <div className={`${styles.circle} ${styles.circle3}`}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

