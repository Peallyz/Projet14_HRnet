import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  setCurrentPage,
  numberPerPage,
  filteredEmployees,
}) => {
  const totalEmployees = filteredEmployees.length;
  const totalPages = Math.ceil(totalEmployees / numberPerPage);

  return (
    <div className="pagination">
      <button
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(1);
          }
        }}
      >
        {"<<"}
      </button>
      <button
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        {"<"}
      </button>

      <button
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        {">"}
      </button>
      <button
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(totalPages);
          }
        }}
      >
        {">>"}
      </button>
      <div className="pagination__description">
        <span>
          {totalPages === 0 ? totalPages : currentPage} / {totalPages}{" "}
          {totalPages > 1 ? "Pages" : "Page"}{" "}
        </span>

        <span>
          {currentPage * numberPerPage - numberPerPage + 1} -{" "}
          {currentPage * numberPerPage > totalEmployees
            ? totalEmployees
            : currentPage * numberPerPage}{" "}
          of {totalEmployees} {totalEmployees > 1 ? "employees" : "employee"}
        </span>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  numberPerPage: PropTypes.number.isRequired,
  filteredEmployees: PropTypes.array,
};
export default Pagination;
