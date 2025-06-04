import { useState } from "react";
import styles from "./LLMLeaderboardSlide.module.css";
import LeaderboardTable from "../LeaderboardTable/LeaderboardTable";
import Button from "../ui/Button/Button";
import Arrow from "../ui/ChangeSign/Arrow";

function LLMLeaderboardSlide() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

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
      <LeaderboardTable showMore={showMore} />
      <div className={styles.loadMoreWrapper}>
        <span
          className={`${styles.fullLeaderboard} ${
            showMore ? styles.visible : ""
          }`}>
          View full leaderboard
        </span>

        <button
          className={`${styles.arrowDown} ${showMore ? styles.buttonUp : ""}`}
          onClick={handleShowMore}>
          <Arrow />
        </button>
      </div>
    </section>
  );
}

export default LLMLeaderboardSlide;
