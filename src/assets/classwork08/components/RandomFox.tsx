import React, { useState, useEffect } from "react";

const RandomFox: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  
  const fetchRandomFox = async () => {
    try {
      const response = await fetch("https://randomfox.ca/floof/");
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      setImageUrl(data.image); // Устанавливаем URL изображения
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    }
  };

  // Эффект срабатывает при монтировании компонента
  useEffect(() => {
    fetchRandomFox();
  }, []);

  return (
    <div className="random-fox-container">
      <h1 className="title">Random Fox</h1>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Random Fox"
          className="fox-image"
        />
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default RandomFox;
