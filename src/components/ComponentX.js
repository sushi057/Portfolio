import React from "react";

function componentX(props) {
  return (
    <div
      className="x-comp"
      style={{ top: `var(${props.y})`, left: `var(${props.x})` }}
    >
      X
    </div>
  );
}

export default componentX;
