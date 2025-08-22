"use client";

import React, { useState } from "react";

const FavList = () => {
  // All products
  const products = [
    {
      id: 1,
      name: "shirt",
      price: "₹999",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUUTBN2H-MQK67wJo3vt0njxDlHXzhDAXQg&s",
      desc: "plan formal pink shirtA man who confidently wears pink sends a clear message that he's comfortable with his masculinity and isn't afraid to stand out.",
    },
    
    {
      id: 2,
      name: "shirt",
      price: "₹299",
      img: "https://m.media-amazon.com/images/I/51pe5Z-ctVL._UY350_.jpg",
      desc: "stylish and comfortable",
    },
    {
      id: 3,
      name: "shirt",
      price: "₹399",
      img: "https://i.pinimg.com/736x/6a/bf/e3/6abfe3a19ad0cc966eacaf2157633eea.jpg",
      desc: "semi formal shirt is a versatile and stylish option",
    },
    {
      id: 4,
      name: "party wear blazer",
      price: "₹599",
      img: "data:image/jpeg;base64,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",
      desc: "A blazer is a versatile type of jacket, more formal than a sports coat but less so than a suit jacket. It's typically a single-breasted, solid-colored jacket, often navy blue, with distinctive features like metal buttons and a structured design..",
    },
    {
      id: 2,
      name: "Blue Kurta",
      price: "₹799",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAA_ns3KSXLWVfHidn-jdfhg1qcDScCYJkUg&s",
      desc: "A blue kurta is a versatile garment, available for both men and women, that can be styled for various occasions..",
    },
    {
      id: 3,
      name: "Stylish Jeans",
      price: "₹1299",
      img: "https://destinations.com.pk/wp-content/uploads/2017/05/3I2A3346.jpg",
      desc: "Comfortable and stylish denim jeans Jeans are a type of casual trousers typically made from denim, a sturdy cotton twill fabric. They are known for their durability and are often reinforced with rivets at stress points like pockets.",
    },
  ];

  // Some products already in favorites
  const [favorites, setFavorites] = useState([1, 2]);  
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Add / Remove Favorite
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fid) => fid !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{  marginBottom: "20px" }}>Man wears</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height:"auto",
                borderRadius: "10px",
                cursor: "pointer",
                marginBottom: "10px",
              }}
              onClick={() => setSelectedProduct(product)}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {/* <button
              onClick={() => toggleFavorite(product.id)}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                background: favorites.includes(product.id) ? "red" : "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {favorites.includes(product.id) ? "Remove" : "Add to Fav"}
            </button> */}
          </div>
        ))}
      </div>

      {/* Modal for Product Detail */}
      {selectedProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              style={{ width: "70%", borderRadius: "10px", marginBottom: "15px" }}
            />
            <h2>{selectedProduct.name}</h2>
            <p style={{ color: "gray" }}>{selectedProduct.desc}</p>
            <p style={{ fontWeight: "bold", marginBottom: "15px" }}>{selectedProduct.price}</p>
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                padding: "8px 12px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavList;
