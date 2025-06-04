import React from "react";

function Blank({ children }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vw",
      }}>
      {children}
    </div>
  );
}

export default Blank;
