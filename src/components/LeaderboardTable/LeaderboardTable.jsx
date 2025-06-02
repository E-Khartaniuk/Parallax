import React, { useEffect, useState } from "react";
import styles from "./LeaderboardTable.module.css";
import ArrowUp from "../ui/ChangeSign/ArrowUp";
import ArrowDown from "../ui/ChangeSign/ArrowDown";
import Dash from "../ui/ChangeSign/Dash";

function LeaderboardTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Parallax/api/leaderboard.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Ошибка загрузки JSON:", err));
  }, []);

  const renderChangeIcon = (change) => {
    if (change === "up") return <ArrowUp></ArrowUp>;
    if (change === "down") return <ArrowDown></ArrowDown>;
    return <Dash></Dash>;
  };

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
          {data.map((model) => (
            <tr key={model.rank}>
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
