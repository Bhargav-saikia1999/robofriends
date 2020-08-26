import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        overflowX: "hidden",
        border: "0.8px solid #007546",
        height: "68.5vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
