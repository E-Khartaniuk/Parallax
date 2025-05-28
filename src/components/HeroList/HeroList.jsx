import React from "react";
import styles from "./HeroList.module.css";

function HeroList() {
  return (
    <ul className={styles.list}>
      <li className={styles.listitem}>
        <p className={styles.value}>1,873</p>
        <span className={styles.description}>LLM models</span>
      </li>
      <li className={styles.listitem}>
        <p className={styles.value}>$326,734</p>
        <span className={styles.description}>Paid to data scientists</span>
      </li>
      <li className={styles.listitem}>
        <p className={styles.value}>6,557</p>
        <span className={styles.description}>Developers</span>
      </li>
    </ul>
  );
}

export default HeroList;
