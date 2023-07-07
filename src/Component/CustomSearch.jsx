import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const CustomSearch = ({
  numberPerPage,
  setNumberPerPage,
  filter,
  setFilter,
  setCurrentPage,
}) => {
  return (
    <form action="#">
      <select
        name="numberPerPage"
        id="numberPerPage"
        value={numberPerPage}
        onChange={(e) => setNumberPerPage(parseInt(e.currentTarget.value))}
      >
        {[10, 20, 50, 100].map((number) => (
          <option value={number} key={uuidv4()}>
            {number}
          </option>
        ))}
      </select>
      <span>
        {numberPerPage} {numberPerPage > 1 ? "employees" : "employee"} per page
      </span>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => {
          setFilter({ ...filter, text: e.target.value });
          setCurrentPage(1);
        }}
      />
    </form>
  );
};

CustomSearch.propTypes = {
  numberPerPage: PropTypes.number.isRequired,
  setNumberPerPage: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default CustomSearch;
