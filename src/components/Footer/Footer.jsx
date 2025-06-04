import styles from "./Footer.module.css";

import xIcon from "../../img/x icon.png";
import telegramIcon from "../../img/telegram icon.png";

function Footer() {
  return (
    <footer className={styles.container}>
      <h2 className={styles.title}>Join our community and harvest $SALT</h2>
      <div>
        <div className={styles.footerLinksWrapper}>
          <a
            href="https://e-khartaniuk.github.io/Parallax/"
            target="_blank"
            className={styles.footerLinks}>
            How It Works
          </a>
          <a
            href="https://e-khartaniuk.github.io/Parallax/"
            target="_blank"
            className={styles.footerLinks}>
            Buy Salt AI
          </a>
        </div>
        <div className={styles.bottomLine}></div>
        <div className={styles.footerWrapper}>
          <div className={styles.underlineLinks}>
            <a href="https://web.telegram.org/">
              <img src={xIcon} alt="x" className={styles.underlineLinksIcon} />
            </a>
            <a href="https://web.telegram.org/">
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
                Privacy Policy
              </a>
            </li>
            <li className={styles.footerLegalListItem}>
              <a href="/" className={styles.footerLegalLinks}>
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
