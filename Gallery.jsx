import { useState } from "react";

import pasta from "./assets/pasta.avif";
import salad from "./assets/salad.jpg";
import pancakes from "./assets/pancakes.jpg";

const images = [
  { id: 1, url: pasta, description: "Pasta with tomato sauce" },
  { id: 2, url: salad, description: "Healthy salad bowl" },
  { id: 3, url: pancakes, description: "Delicious pancakes" },
];

function Gallery() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevImage = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
          color: "#333",
        }}
      >
        <h1 style={{ color: "#333" }}>Recipe Gallery</h1>

        <img
          src={images[index].url}
          alt={images[index].description}
          style={{
            width: "100%",
            margin: "20px 0",
            borderRadius: "10px",
          }}
        />

        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          {images[index].description}
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={prevImage}
            disabled={index === 0}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#ccc",
              cursor: "pointer",
              color: "#333",
            }}
          >
            Previous
          </button>

          <button
            onClick={nextImage}
            disabled={index === images.length - 1}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </div>

        <p style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export default Gallery;
