import styles from "./HeroList.module.css";

function HeroList({ showList }) {
  return (
    <ul className={styles.list}>
      {[
        { value: "1,873", desc: "LLM models" },
        { value: "$326,734", desc: "Paid to data scientists" },
        { value: "6,557", desc: "Developers" },
      ].map((item, i) => (
        <li
          key={i}
          className={`${styles.listitem} ${styles[`item${i + 1}`]} ${
            showList ? styles.showitem : ""
          }`}>
          <p className={styles.value}>{item.value}</p>
          <span className={styles.description}>{item.desc}</span>
        </li>
      ))}
    </ul>
  );
}

export default HeroList;
