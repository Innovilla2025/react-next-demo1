"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        background: "linear-gradient(90deg, #ffecd2 0%, #da6c40ff 100%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      {/* Logoooo */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#ff7e5f",
          letterSpacing: "2px",
        }}
      >
        MyShop
      </div>

      
      <div style={{ display: "flex", gap: "24px" }}>
        <Link
          href="/product"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            fontSize: "1.1rem",
          }}
        >
          Product
        </Link>

        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            fontSize: "1.1rem",
          }}
        >
          Home
        </Link>

        <Link
          href="/seller"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            fontSize: "1.1rem",
          }}
        >
          seller
        </Link>
          <Link
          href="/account"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            fontSize: "1.1rem",
          }}
        >
          account
        </Link>

       
      </div>
    </nav>
  );
};

export default Navbar;
