import React from "react";

import styles from "./IntegratedProjects.module.css";

import solana from "../../img/solana.png";
import arweave from "../../img/arweave.png";
import bitTensor from "../../img/bitTensor.png";
import rndr from "../../img/rndr.png";
import telegram from "../../img/telegram.png";

function IntegratedProjects() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <img src={solana} alt="solana" className={styles.item} />
      </li>
      <li className={styles.listItem}>
        <img src={arweave} alt="arweave" className={styles.item} />
      </li>
      <li className={styles.listItem}>
        <img src={bitTensor} alt="bitTensor" className={styles.item} />
      </li>
      <li className={styles.listItem}>
        <img src={rndr} alt="rndr" className={styles.item} />
      </li>
      <li className={styles.listItem}>
        <img src={telegram} alt="telegram" className={styles.item} />
      </li>
    </ul>
  );
}

export default IntegratedProjects;
