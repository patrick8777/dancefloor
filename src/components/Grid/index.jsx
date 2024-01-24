// Grid.jsx
import React from "react";
import "../Grid/styles.css";
import Cell from "../Cell";

function Grid({ count }) {
  const generateKey = (index) => `cell_${index}`;

  const renderCells = () => {
    return Array.from({ length: 25 }, (_, index) => (
      <Cell key={generateKey(index)} count={count} />
    ));
  };

  return <div className="wrapper">{renderCells()}</div>;
}

export default Grid;
