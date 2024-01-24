import React, { useEffect, useState } from "react";
import "../Cell/styles.css";

function getRandomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
}

function Cell({ count }) {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, [count]);

  const handleCellClick = () => {
    setBackgroundColor(getRandomColor());
  };

  return (
    <div
      className="box box1"
      style={{ backgroundColor }}
      onClick={handleCellClick}></div>
  );
}

export default Cell;
