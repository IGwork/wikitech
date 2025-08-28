import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "About Us", "Explore", "Resources"];

  return (
    <nav className="navbar">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={`glass-button ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
