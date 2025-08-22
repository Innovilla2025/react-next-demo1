import React from "react";

const Footer = () => (
  <footer
    style={{
      background: "linear-gradient(90deg, #fcb69f 0%, #cf7d30ff 100%)",
      color: "#333",
      textAlign: "center",
      padding: "20px 0",
      fontWeight: "500",
      fontSize: "1rem",
      boxShadow: "0 -2px 8px rgba(0,0,0,0.07)",
      marginTop: "40px"
    }}
  >
    &copy; {new Date().getFullYear()} MyShop. made by priyanka.
  </footer>
);

export default Footer;