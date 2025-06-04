import styles from "./ButtonMini.module.css";

function ButtonMini({ children }) {
  return <button className={styles.bySaltButton}>{children}</button>;
}

export default ButtonMini;
