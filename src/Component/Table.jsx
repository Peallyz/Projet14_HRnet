import { useSelector } from "react-redux";
import employeeTemplate from "../utils/data/employeeTemplate";
import { useState, useEffect } from "react";
import EmployeeSortAndFormatService from "../utils/services/employee";
import { v4 as uuidv4 } from "uuid";
import Pagination from "./Pagination";
import CustomSearch from "./CustomSearch";

const Table = () => {
  const service = new EmployeeSortAndFormatService();

  const employees = useSelector((state) => state.employee);

  const employeesKeys = Object.keys(employeeTemplate);

  const [filter, setFilter] = useState({ type: null, isDesc: true, text: "" });
  const [filteredEmployees, setFilteredEmployees] = useState(
    service.formatDate(employees)
  );

  const [numberPerPage, setNumberPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (filter.type || filter.text) {
      const { type, isDesc, text } = filter;
      setFilteredEmployees(
        service.sortEmployees(employees, type, isDesc, text.toLowerCase())
      );
    } else {
      setFilteredEmployees(service.formatDate(employees));
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
      <div
        className="table"
        style={{ gridTemplateColumns: `repeat(${employeesKeys.length}, auto)` }}
      >
        {employeesKeys.map((key) => (
          <div
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
            <span>{service.formatKey(key)}</span>
          </div>
        ))}

        {filteredEmployees.length > 0 ? (
          filteredEmployees
            .slice(
              (currentPage - 1) * numberPerPage,
              currentPage * numberPerPage
            )
            .map((user) =>
              employeesKeys.map(
                (key) =>
                  key !== "id" && (
                    <div className="table__content table__body" key={uuidv4()}>
                      <span>{user[key]}</span>
                    </div>
                  )
              )
            )
        ) : (
          <div className="table__content--no-employee">
            <span>No employees</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
