import React, { useState } from "react";
import MyButton from "../myButton/MyButton";

const ColorChanger = () => {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        width: "300px",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        margin: "20px auto",
      }}
    >
      <div>
        <h3>Change Container Color</h3>
        <MyButton onClick={() => setColor("red")}>Red</MyButton>
        <MyButton onClick={() => setColor("green")}>Green</MyButton>
        <MyButton onClick={() => setColor("blue")}>Blue</MyButton>
      </div>
    </div>
  );
};

export default ColorChanger;
