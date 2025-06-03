import React from "react";
import styles from "./JoinCommunity.module.css";
import xIcon from "../../img/x icon.png";
import telegramicon from "../../img/telegram icon.png";

function JoinCommunity() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Join our community</h2>
      <div className={styles.decrption}>
        <p>
          Join us on our mission to to the moon & revolutionize open source AI
          development so that we can build a permissionless, democratized, and
          decentralized AI.
        </p>
        <p>
          Let the fate of AI be in our hands and not that of big tech companies.
        </p>
      </div>
      <ul className={styles.iconsWrapper}>
        <li>
          <a href="/">
            <img src={xIcon} alt="X" className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={telegramicon} alt="telegram" className={styles.icon} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default JoinCommunity;
