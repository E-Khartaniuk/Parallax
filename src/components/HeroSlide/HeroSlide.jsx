import React from "react";
import styles from "./HeroSlide.module.css";
import Button from "../ui/Button/Button";
import HeroList from "../HeroList/HeroList";

function HeroSlide() {
  return (
    <section className={styles.heroSlide}>
      <h1 className={styles.heroTitle}>
        A new economic primitive for funding decentralized AI
      </h1>
      <p className={styles.description}>
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </p>
      <div className={styles.linksWraper}>
        <Button>Buy Salt AI</Button>
        <a href="/" className={styles.tryNow}>
          Try Now
        </a>
      </div>

      <HeroList></HeroList>
    </section>
  );
}

export default HeroSlide;
