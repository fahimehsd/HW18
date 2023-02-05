import React, { useState } from "react";
import "./AdjustColor.css";
const AdjustColor = () => {
  const random = Math.floor(Math.random() * (225 - 0 + 1)) + 0;
  const [red, setRed] = useState(random);
  const [green, setGreen] = useState(random);
  const [blue, setBlue] = useState(random);
  const color = `rgb(${red},${green},${blue})`;

  const IncreaseRed = () => {
    setRed(Math.floor(Math.random() * (225 - red + 1)) + red);
  };
  const IncreaseGreen = () => {
    setGreen(Math.floor(Math.random() * (225 - green + 1)) + green);
  };
  const IncreaseBlue = () => {
    setBlue(Math.floor(Math.random() * (225 - blue + 1)) + blue);
  };

  const decreaseRed = () => {
    setRed(Math.floor(Math.random() * (red - 0 + 1)) + 0);
  };
  const decreaseGreen = () => {
    setGreen(Math.floor(Math.random() * (green - 0 + 1)) + 0);
  };
  const decreaseBlue = () => {
    setBlue(Math.floor(Math.random() * (blue - 0 + 1)) + 0);
  };
  return (
    <div>
      <div>
        <h1>Red</h1>
        <button onClick={IncreaseRed}>Increase Red</button>
        <button onClick={decreaseRed}>Decrease Red</button>
      </div>
      <div>
        <h1>Green</h1>
        <button onClick={IncreaseGreen}>Increase Green</button>
        <button onClick={decreaseGreen}>Decrease Green</button>
      </div>
      <div>
        <h1>Blue</h1>
        <button onClick={IncreaseBlue}>Increase Blue</button>
        <button onClick={decreaseBlue}>Decrease Blue</button>
      </div>
      <div style={{ background: `${color}` }} className="boxColor"></div>
    </div>
  );
};
export default AdjustColor;
