import React from "react";
import "./Profile_page.css";
import myProfilePic from "../assets/Nabil.jpg"; 

function ProfilePage() {
  return (
    <div className="profile-container">
      <img
        src={myProfilePic}
        alt="Profile"
        className="profile-large"
      />
      <h2>Safwat Ashraf Nabil</h2>
      <p>Email: safwatashraf1211@gmail.com</p>
      <p>Course Name: Software Development - III</p>
      <p>Group: C2</p>
      <p>ID: 20230104129</p>
      <p>Date Joined: January 5, 2023</p>
    </div>
  );
}

export default ProfilePage;
