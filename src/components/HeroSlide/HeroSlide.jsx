import React from "react";

import Button from "../ui/Button/Button";
import HeroList from "../HeroList/HeroList";
import ButtonMini from "../ui/Button/ButtonMini";
import styles from "./HeroSlide.module.css";

function HeroSlide({ activeIndex }) {
  const titleClass = activeIndex >= 1 ? styles.heroTitleSecondState : "";
  const sectionClass = activeIndex >= 2 ? styles.hideHeroSection : "";

  return (
    <section className={`${styles.heroSlide} ${sectionClass}`}>
      <div className={styles.wrapper}>
        <div className={styles.linksWpapper}>
          <a href="/" className={styles.howItWorks}>
            How It Works
          </a>
          <ButtonMini>Buy Salt AI</ButtonMini>
        </div>
        <h1 className={`${styles.heroTitle} ${titleClass}`}>
          A new economic primitive for funding decentralized AI
        </h1>
        <p className={styles.description}>
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>
        <div className={styles.secondLinksWraper}>
          <Button>Buy Salt AI</Button>
          <a href="/" className={styles.tryNow}>
            Try Now
          </a>
        </div>
        <HeroList showList={activeIndex === 1} />
      </div>
    </section>
  );
}

export default HeroSlide;
