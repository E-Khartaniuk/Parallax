import { useEffect, useState } from "react";
import styles from "./LeaderboardTable.module.css";
import renderChangeIcon from "../ui/ChangeStatus/ChangeStatus";

function LeaderboardTable({ showMore }) {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    fetch("/Parallax/api/leaderboard.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setVisibleData(showMore ? json.slice(8, 16) : json.slice(0, 8));
      })
      .catch((err) => console.error("error loading JSON:", err));
  }, []);

  useEffect(() => {
    setAnimatingOut(true);
    const timeout = setTimeout(() => {
      setVisibleData(showMore ? data.slice(8, 16) : data.slice(0, 8));
      setAnimatingOut(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [showMore, data]);

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
          {visibleData.map((model) => (
            <tr
              key={model.rank}
              className={animatingOut ? styles.fadeOut : styles.fadeIn}>
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
