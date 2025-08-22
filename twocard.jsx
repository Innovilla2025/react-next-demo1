"use client";

import React, { useState } from "react";

const TwoCards = () => {
  // Default 2 cards
  const [cards, setCards] = useState([
    { id: 1, title: "Home item", desc: "This is the first card.", type: "points" },
    { id: 2, title: "Women Wear", desc: "This is the second card.", type: "favorite" },
    { id: 3, title: "Men wear", desc: "This is the third card.", type: "points" },
    { id: 4, title: "child Wear", desc: "This is the four card.", type: "favorite" },
  ]);

  
  const addNewCard = () => {
    const newCard = {
      id: Date.now(),
      title: `New Card`,
      desc: "This is a newly added card.",
      type: "custom",
    };
    setCards([...cards, newCard]);
  };

  
  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };


  const orangeBtn = {
    padding: "10px 15px",
    backgroundColor: "#e78b34ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            position: "relative",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          
          <button
            onClick={() => removeCard(card.id)}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              border: "none",
              background: "#e78b34ff",
              color: "white",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ✕
          </button>

          <h3>{card.title}</h3>
          <p>{card.desc}</p>

          
          <button
            style={orangeBtn}
            onClick={() =>
              card.type === "click"
                ? alert("check more product")
                : card.type === "favorite"
                ? alert("check more product!")
                : alert("Custom card clicked!")
            }
          >
            {card.type === "points"
              ? "click me"
              : card.type === "favorite"
              ? "click me"
              : "click me"}
          </button>
        </div>
      ))}

      
      <div
        style={{
          border: "2px dashed #aaa",
          borderRadius: "10px",
          padding: "20px",
          width: "250px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={addNewCard}
      >
        <span style={{ fontSize: "40px", color: "#e78b34ff" }}>+</span>
        <p style={{ color: "#e78b34ff", fontWeight: "bold" }}>Add New</p>
      </div>
    </div>
  );
};

export default TwoCards;
