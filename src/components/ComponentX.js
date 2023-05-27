import React from "react";

function componentX(props) {
  return (
    <div
      className="x-comp"
      style={{
        position: "absolute",
        top: `${props.y}px`,
        left: `${props.x}px`,
      }}
    >
      X
    </div>
  );
}

export default componentX;
