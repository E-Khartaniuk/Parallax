import React from "react";
import styles from "./Footer.module.css";

import xIcon from "../../img/x icon.png";
import telegramIcon from "../../img/telegram icon.png";

function Footer() {
  return (
    <footer className={styles.container}>
      <h2 className={styles.title}>Join our community and harvest $SALT</h2>
      <div>
        <div className={styles.footerLinksWrapper}>
          <a href="/" className={styles.footerLinks}>
            How It Works
          </a>
          <a href="/" className={styles.footerLinks}>
            Buy Salt AI
          </a>
        </div>
        <div className={styles.bottomLine}></div>
        <div className={styles.footerWrapper}>
          <div className={styles.underlineLinks}>
            <a href="/">
              <img src={xIcon} alt="x" className={styles.underlineLinksIcon} />
            </a>
            <a href="/">
              <img
                src={telegramIcon}
                alt="telegram"
                className={styles.underlineLinksIcon}
              />
            </a>
          </div>
          <ul className={styles.footerLegalList}>
            <li className={styles.footerLegalListItem}>
              <a href="/" className={styles.footerLegalLinks}>
                Terms of Use
              </a>
            </li>
            <li className={styles.footerLegalListItem}>
              <a href="/" className={styles.footerLegalLinks}>
                Privacy Poli cy
              </a>
            </li>
            <li className={styles.footerLegalListItem}>
              <a href="/" className={styles.footerLegalLinks}>
                Cookie Polic y
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
