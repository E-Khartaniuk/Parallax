import React from "react";
import styles from "./LLMLeaderboardSlide.module.css";
import LeaderboardTable from "../LeaderboardTable/LeaderboardTable";
import Button from "../ui/Button/Button";

function LLMLeaderboardSlide() {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>LLM Leaderboard</h2>

        <Button>Submit your model</Button>
      </div>
      <p className={styles.description}>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>
      <LeaderboardTable></LeaderboardTable>
    </section>
  );
}

export default LLMLeaderboardSlide;
