import React from "react";

function ArrowDown({ arrowColor }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 19L6 13M12 19L18 13M12 19L12 5"
        stroke={arrowColor ? "white" : "#FF1B44"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowDown;
