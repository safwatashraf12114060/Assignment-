import React from "react";
import "./Pagination.css";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-container">
      <button className="nav-btn" onClick={handlePrev}>⮜</button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`page-btn ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
      <button className="nav-btn" onClick={handleNext}>⮞</button>
    </div>
  );
}

export default Pagination;
