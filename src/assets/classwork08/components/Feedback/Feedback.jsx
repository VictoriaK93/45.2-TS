import React, { useState } from "react";
import MyButton from "../myButton/MyButton";

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const resetFeedback = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div
      style={{
        padding: "20px",
        margin: "20px auto",
        maxWidth: "400px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>Feedback</h3>
      <div style={{ marginBottom: "15px" }}>
        <span style={{ marginRight: "10px" }}>Likes: {likes}</span>
        <MyButton onClick={() => setLikes(likes + 1)}>Like</MyButton>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <MyButton onClick={() => setDislikes(dislikes + 1)}>Dislike</MyButton>
        <span style={{ marginLeft: "10px" }}>Dislikes: {dislikes}</span>
      </div>
      <MyButton onClick={resetFeedback} type="button">
        Reset Results
      </MyButton>
    </div>
  );
};

export default Feedback;
