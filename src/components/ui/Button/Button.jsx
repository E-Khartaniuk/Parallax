import styles from "./Button.module.css";

function Button({ children }) {
  return <button className={styles.bySaltButton}>{children}</button>;
}

export default Button;
