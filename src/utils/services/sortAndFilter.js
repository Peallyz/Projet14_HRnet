import { formatDate, stringOrInt } from "./format";

/**
 * Sorts the array of employees based on the provided sorting parameters.
 * If sortByType is specified and sortByText is empty, the employees will be sorted by type and formatted dates will be returned.
 * If sortByType is not specified and sortByText is provided, the employees will be filtered by text and formatted dates will be returned.
 * If both sortByType and sortByText are specified, the employees will be sorted by type, then filtered by text, and formatted dates will be returned.
 * If none of the parameters are specified, the employees will be sorted by the default format and formatted dates will be returned.
 *
 * @param {Array} employees - An array of employee objects.
 * @param {string} sortByType - The type to sort the employees by (e.g., "firstName", "lastName", "dateOfBirth").
 * @param {boolean} isDesc - Specifies whether to sort in descending order.
 * @param {string} sortByText - The text to filter the employees by.
 * @returns {Array} - The sorted and/or filtered array of employees with formatted dates.
 */
export const sortEmployees = (employees, sortByType, isDesc, sortByText) => {
  const formattedEmployees = [...employees];

  if (sortByType && sortByText === "") {
    sortEmployeesByType(formattedEmployees, sortByType, isDesc);
    return formatDate(formattedEmployees);
  }

  if (!sortByType && sortByText !== "") {
    return filterEmployeeByText(formatDate(formattedEmployees), sortByText);
  }

  if (sortByType && sortByText !== "") {
    sortEmployeesByType(formattedEmployees, sortByType, isDesc);
    return filterEmployeeByText(formatDate(formattedEmployees), sortByText);
  }

  return formatDate(formattedEmployees);
};

/**
 * Sorts the array of employees by the specified type and in the specified direction.
 *
 * @param {Array} employees - An array of employee objects.
 * @param {string} sortBy - The type to sort the employees by (ex: "firstName", "lastName", "dateOfBirth").
 * @param {boolean} isDesc - Specifies whether to sort in descending order.
 * @returns {Array} The sorted array of employees by sors types.
 */
export const sortEmployeesByType = (employees, sortBy, isDesc) => {
  employees.sort((a, b) => {
    if (!isDesc) {
      if (stringOrInt(sortBy) === "string") {
        return a[sortBy].localeCompare(b[sortBy]);
      } else {
        return a[sortBy] - b[sortBy];
      }
    }

    if (isDesc) {
      if (stringOrInt(sortBy) === "string") {
        return b[sortBy].localeCompare(a[sortBy]);
      } else {
        return b[sortBy] - a[sortBy];
      }
    }
  });
};

/**
 * Filters the array of employees based on the provided text.
 *
 * @param {Array} employees - An array of employee objects.
 * @param {string} text - The text to filter the employees by.
 * @returns {Array} - The filtered array of employees.
 */
export const filterEmployeeByText = (employees, text) => {
  const filteredEmployee = employees.filter((object) => {
    for (let key in object) {
      const value = object[key];

      if (value.toString().toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  return filteredEmployee;
};
