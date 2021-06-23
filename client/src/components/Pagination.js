import React from "react";
const Pagination = ({ pkmnPerPage, totalPkmn, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPkmn / pkmnPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          // <li key={number} className="page">
          <span
            key={number}
            onClick={() => {
              paginate(number);
            }}
            href={number}
            className="page-link"
          >
            {` ${number}`}
          </span>
          // </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
