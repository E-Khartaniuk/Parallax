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
      <div className={styles.iconsWrapper}>
        <img src={xIcon} alt="X" />
        <img src={telegramicon} alt="telegram" />
      </div>
    </section>
  );
}

export default JoinCommunity;
