import { formatDate, stringOrInt } from "./format";

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

  return this.formatDate(formattedEmployees);
};

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
