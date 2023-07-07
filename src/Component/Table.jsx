import { useSelector } from "react-redux";
import employeeTemplate from "../utils/data/employeeTemplate";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Pagination from "./Pagination";
import CustomSearch from "./CustomSearch";
import { formatDate, formatKey } from "../utils/services/format";
import { sortEmployees } from "../utils/services/sortAndFilter";

const Table = () => {
  const employees = useSelector((state) => state.employee);

  const employeesKeys = Object.keys(employeeTemplate);

  const [filter, setFilter] = useState({ type: null, isDesc: true, text: "" });
  const [filteredEmployees, setFilteredEmployees] = useState(
    formatDate(employees)
  );

  const [numberPerPage, setNumberPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (filter.type || filter.text) {
      const { type, isDesc, text } = filter;
      setFilteredEmployees(
        sortEmployees(employees, type, isDesc, text.toLowerCase())
      );
    } else {
      setFilteredEmployees(formatDate(employees));
    }
  }, [filter, employees]);

  return (
    <>
      <div className="tools">
        <CustomSearch
          numberPerPage={numberPerPage}
          setNumberPerPage={setNumberPerPage}
          filter={filter}
          setFilter={setFilter}
          setCurrentPage={setCurrentPage}
        />
        <Pagination
          numberPerPage={numberPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          filteredEmployees={filteredEmployees}
        />
      </div>
      <div className="table__wrapper">
        <table className="table">
          <thead>
            <tr>
              {employeesKeys.map((key) => (
                <th
                  className="table__content table__head"
                  key={key}
                  onClick={() =>
                    setFilter(
                      filter.type === key
                        ? { ...filter, isDesc: !filter.isDesc }
                        : { ...filter, type: key, isDesc: true }
                    )
                  }
                >
                  {formatKey(key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees
                .slice(
                  (currentPage - 1) * numberPerPage,
                  currentPage * numberPerPage
                )
                .map((user) => (
                  <tr key={user.id}>
                    {employeesKeys.map(
                      (key) =>
                        key !== "id" && (
                          <td
                            className="table__content table__body"
                            key={uuidv4()}
                          >
                            <span>{user[key]}</span>
                          </td>
                        )
                    )}
                  </tr>
                ))
            ) : (
              <tr>
                <td
                  colSpan={employeesKeys.length}
                  className="table__content--no-employee"
                >
                  <span>No employees</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
