import React from "react";
import "./Sidebar.css";
import myProfilePic from "../assets/Nabil.jpg"; 

function Sidebar({ onSelect, isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <img
          src={myProfilePic}     
          alt="Profile"
          className="profile-pic"
        />
        {isOpen && <span className="profile-name">Safwat Ashraf Nabil</span>}
      </div>

      <nav className="sidebar-nav">
        <button onClick={() => onSelect("profile")}>
          <span className="icon">👤</span>
          {isOpen && <span className="text"> Profile</span>}
        </button>
        <button onClick={() => onSelect("articles")}>
          <span className="icon">📝</span>
          {isOpen && <span className="text"> My Articles</span>}
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
