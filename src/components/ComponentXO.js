import React from "react";

function componentXO(props) {
  return (
    <div
      className="xo-comp"
      style={{
        position: "absolute",
        top: `${props.y}px`,
        left: `${props.x}px`,
      }}
    >
      {props.name}
    </div>
  );
}

export default componentXO;
