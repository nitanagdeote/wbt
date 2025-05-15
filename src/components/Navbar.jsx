// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/explore">Explore</a>
        </li>
        <li>
          <a href="/barChart">bc</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
