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
          <a href="https://web.telegram.org/" target="_blank">
            <img src={xIcon} alt="X" className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank">
            <img src={telegramicon} alt="telegram" className={styles.icon} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default JoinCommunity;
