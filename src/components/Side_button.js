import React from "react";
import "./Side_button.css"; 

function SideButton({ toggle, isOpen }) {
  return (
    <button className="side-btn" onClick={toggle}>
      {isOpen ? "⮜" : "⮞"}
    </button>
  );
}

export default SideButton;
