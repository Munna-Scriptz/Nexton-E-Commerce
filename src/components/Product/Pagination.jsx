import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  return (
    <div className="flex items-center" style={{ marginTop: 20, textAlign: "center" }}>
      {/* Prev */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        style={{
          cursor: "pointer",
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
        className="mr-[16px]"
      >
        <FaAngleLeft/>
      </button>

      {/* Page numbers */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          style={{
            background: currentPage === num ? "#E5E7EB" : "#fff",
            color: currentPage === num ? "#4B5563" : "#4B5563",
          }}
          className="h-[36px] w-[36px] text-Primary text-base rounded-[12px] cursor-pointer font-medium"
        >
          {num}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={{
          cursor: "pointer",
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}
        className="ml-[16px]"

      >
        <FaAngleRight/>
      </button>
    </div>
  );
};

export default Pagination;