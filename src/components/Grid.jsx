import React from "react";
import "../css/Grid.css";

const Grid = ({ items, renderItem }) => {
  return (
    <div className="parent-container">
      <div className="grid">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
