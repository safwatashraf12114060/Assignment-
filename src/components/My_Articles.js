import React, { useState } from "react";
import StatusBadge from "./Status_Badges";
import Pagination from "./Pagination";
import "./My_Articles.css";

function MyArticles() {
  const [currentPage, setCurrentPage] = useState(1);

  const articles = [
    { title: "Numerical Method Quiz 01 Note",     status: "Published",    lastEdited: "1 month ago" },
    { title: "Algorithm Mid Note",                status: "Published",    lastEdited: "2 week ago" },
    { title: "Numerical Method Quiz 02 Note",     status: "Draft",        lastEdited: "1 days ago" },

    { title: "Algorithm Quiz 01 Note",            status: "Published",    lastEdited: "1 month ago" },
    { title: "Numerical Method Mid Note",         status: "Draft",        lastEdited: "10 days ago" },
    { title: "Algorithm Quiz 02 Note",            status: "Draft",        lastEdited: "5 days ago" },

    { title: "SD Lab Proposal",                   status: "Published",    lastEdited: "2 month ago" },
    { title: "Algorithm Lab Offline 1",           status: "Published",    lastEdited: "1 week ago" },
    { title: "Assembly Lab Offline 4",            status: "Draft",        lastEdited: "3 days ago" },

    { title: "Data Communication Note",           status: "Draft",        lastEdited: "1 days ago" },
    { title: "Computer Architecture Class Note",  status: "Draft",        lastEdited: "3 days ago" },
    { title: "Mid Syllabus",                      status: "Published",    lastEdited: "1 month ago" },

    { title: "Math Matrix Note",                  status: "Published",    lastEdited: "1 month ago" },
    { title: "Math Vector Note",                  status: "Draft",        lastEdited: "10 days ago" },
    { title: "All Algorithm & Code",              status: "Draft",        lastEdited: "1 days ago" },
  ];

  const articlesPerPage = 3;
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="articles-container">
      <h2>My Articles</h2>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Last Edited</th>
            </tr>
          </thead>
          <tbody>
            {currentArticles.map((article, index) => (
              <tr key={index}>
                <td>{article.title}</td>
                <td><StatusBadge status={article.status} /></td>
                <td>{article.lastEdited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(p) => setCurrentPage(p)}
      />
    </div>
  );
}

export default MyArticles;
