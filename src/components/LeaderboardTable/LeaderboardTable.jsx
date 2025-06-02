import React, { useEffect, useState } from "react";
import styles from "./LeaderboardTable.module.css";
import renderChangeIcon from "../ui/ChangeStatus/ChangeStatus";

function LeaderboardTable({ showMore }) {
  const [data, setData] = useState([]);
  const [animationKey, setAnimationKey] = useState("fade-in");

  useEffect(() => {
    fetch("/Parallax/api/leaderboard.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Ошибка загрузки JSON:", err));
  }, []);

  const displayedData = showMore ? data.slice(8, 16) : data.slice(0, 8);

  useEffect(() => {
    setAnimationKey("fade-out");
    const timer = setTimeout(() => {
      setAnimationKey("fade-in");
    }, 200);
    return () => clearTimeout(timer);
  }, [showMore]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Model Name</th>
            <th>Average</th>
            <th>ARC</th>
            <th>HellaSwag</th>
            <th>MMLU</th>
            <th>TruthfulQA</th>
            <th>Winogrande</th>
            <th>GSM8K</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((model) => (
            <tr key={model.rank} className={`${styles[animationKey]}`}>
              <td>{renderChangeIcon(model.change)}</td>
              <td>{model.rank}</td>
              <td>{model.modelName}</td>
              <td>{model.average}</td>
              <td>{model.arc}</td>
              <td>{model.hellaSwag}</td>
              <td>{model.mmlu}</td>
              <td>{model.truthfulQA}</td>
              <td>{model.winogrande}</td>
              <td>{model.gsm8k}</td>
              <td>{model.usage.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderboardTable;
