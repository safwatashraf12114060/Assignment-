import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProfilePage from "./components/Profile_page";
import MyArticles from "./components/My_Articles";
import SideButton from "./components/Side_button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [page, setPage] = useState("articles");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Sidebar onSelect={setPage} isOpen={isSidebarOpen} />
      <SideButton toggle={toggleSidebar} isOpen={isSidebarOpen} />
      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "#ffffff",
          minHeight: "100vh",
          marginLeft: isSidebarOpen ? "220px" : "60px",
          transition: "margin-left 0.3s ease",
        }}
      >
        {page === "profile" ? <ProfilePage /> : <MyArticles />}
      </div>
    </div>
  );
}

export default App;
