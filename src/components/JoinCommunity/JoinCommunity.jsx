import React from "react";
import styles from "./JoinCommunity.module.css";

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
      <div>logo logo</div>
    </section>
  );
}

export default JoinCommunity;
