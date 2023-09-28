import React from "react";
import "./Pagination.css";
import { usePagination } from "../../contextApi/appContext"; 

import FirstPageIcon from "@mui/icons-material/FirstPage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LastPageIcon from "@mui/icons-material/LastPage";

const Pagination = ({ totalItems, onPageChange, rowsPerPageOptions }) => {
  const { currentPage, setCurrentPage, rowsPerPage, setRowsPerPage } = usePagination();

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    onPageChange(totalPages);
  };

  const handleRowsChange = (event) => {
    const selectedRowsPerPage = parseInt(event.target.value);
    setRowsPerPage(selectedRowsPerPage);
    setCurrentPage(1); // Reset to the first page when changing rows per page
  };

  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(startIndex + rowsPerPage - 1, totalItems);

  return (
    <div className="pagination">
      <div className="pagination-actions">
        <button onClick={handleFirstPage} className="pagination-button">
          <FirstPageIcon />
        </button>
        <button onClick={handlePreviousPage} className="pagination-button">
          <NavigateBeforeIcon />
        </button>
        <span className="pagination-page-info">
          {startIndex}-{endIndex} of {totalItems}
        </span>
        <button onClick={handleNextPage} className="pagination-button">
          <NavigateNextIcon />
        </button>
        <button onClick={handleLastPage} className="pagination-button">
          <LastPageIcon />
        </button>
      </div>
      <div className="pagination-rows-per-page">
        <span>Show Rows:</span>
        <div className="dropdown-container">
          <span className="dropdown-toggle">{rowsPerPage}</span>
          <div className="dropdown-content">
            {rowsPerPageOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  handleRowsChange({ target: { value: option } });
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
