import React from "react";
import Button from "../ui/Button/Button";
import styles from "./CrowdsourcingSlide.module.css";

function CrowdsourcingSlide() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Crowdsourcing our collective intelligence to build the best AI
      </h2>

      <div className={styles.decrption}>
        <p>
          Open source AI has been lagging behind the likes of Google and OpenAI
          by billions of dollars.
        </p>
        <p>
          Salt aims to solve that by rewarding open source developers who
          contribute to the democratization of AI. We run competitions between
          AI models to find and reward the best AI models. As a result, our
          users will be able to access the latest cutting edge AI models.
        </p>
      </div>

      <Button>Use The Cutting Edge AI</Button>
    </section>
  );
}

export default CrowdsourcingSlide;
