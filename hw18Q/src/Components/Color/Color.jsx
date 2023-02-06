import React, { useState } from "react";
import "./color.css";

function Color() {
  const [colors, setColors] = useState([]);
  const addColor = () => {
    const x = Math.floor(Math.random() * (225 - 0 + 1)) + 0;
    const y = Math.floor(Math.random() * (225 - 0 + 1)) + 0;
    const z = Math.floor(Math.random() * (225 - 0 + 1)) + 0;
    const color = `rgb(${x},${y},${z})`;
    setColors([color, ...colors]);
  };
  return (
    <div className="colorContainer">
      <button onClick={addColor}>Add Color</button>

      {colors.length > 0 &&
        colors.map((color) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              key={color}
              style={{
                background: `${color}`,
                width: "5rem",
                height: "5rem",
                margin: "1rem"
              }}
            ></div>
            <p>{color}</p>
          </div>
        ))}
    </div>
  );
}

export default Color;
