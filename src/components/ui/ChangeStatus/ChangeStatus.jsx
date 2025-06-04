import ArrowUp from "../ChangeSign/ArrowUp";
import ArrowDown from "../ChangeSign/ArrowDown";
import Dash from "../ChangeSign/Dash";

const renderChangeIcon = (change) => {
  if (change === "up") return <ArrowUp />;
  if (change === "down") return <ArrowDown />;
  return <Dash />;
};

export default renderChangeIcon;
