import React from "react";
import styles from "./Button.module.css";

function Button({ children }) {
  return (
    <div className={styles.border}>
      <button className={styles.bySaltButton}>{children}</button>
    </div>
  );
}

export default Button;
