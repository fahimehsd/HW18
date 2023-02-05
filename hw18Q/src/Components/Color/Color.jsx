import React, { useState } from "react";
import "./Color.css";
export default function Color() {
  const [colors, setColors] = useState([]);
  const addColor = () => {
    const color =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    setColors([color, ...colors]);
  };
  return (
    <div>
      <button onClick={addColor}>Add Color</button>
      <div className="pickedColor">
        {colors.length > 0 &&
          colors.map((clr) => {
            <div
              className="colorBox"
              key={clr}
              style={{ backgroundColor: `${clr}` }}
            >
              {clr}
            </div>;
          })}
      </div>
    </div>
  );
}
