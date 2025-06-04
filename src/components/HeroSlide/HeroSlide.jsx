import React from "react";
import styles from "./HeroSlide.module.css";
import Button from "../ui/Button/Button";
import HeroList from "../HeroList/HeroList";

function HeroSlide({ activeIndex, isHeroListVisible }) {
  const titleClass = activeIndex >= 1 ? styles.heroTitleSecondState : "";
  const sectionClass = activeIndex >= 2 ? styles.hideHeroSection : "";

  return (
    <section className={`${styles.heroSlide} ${sectionClass}`}>
      <h1 className={`${styles.heroTitle} ${titleClass}`}>
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
      <HeroList showList={activeIndex === 1} />
    </section>
  );
}

export default HeroSlide;
