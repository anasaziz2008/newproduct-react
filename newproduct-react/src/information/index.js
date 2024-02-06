import React from "react";
import styles from "./information.module.css";
export const InformationComponent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.information}>
      <div>
        <span className={styles.text}>Name*</span>
        <br></br>
        <input
        className={styles.name}
          
          placeholder="Your Name....."
        ></input>
      </div>

      <div>
      <span className={styles.text}>OEM*</span>
        <br></br>
        <input
         className={styles.name}
          placeholder="131654334"
        ></input>
      </div>

      <button
     className={styles.button}
      >
     
          Save
        
      </button>
    </div>
    </div>
  );
};
