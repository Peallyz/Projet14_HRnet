/**
 * Formats the date properties for each employee to a human-readable format.
 *
 * @param {Array} employees - An array of employee objects.
 * @returns {Array} - The formatted array of employees with date properties in localized string format.
 */
export const formatDate = (employees) => {
  const formattedEmployees = employees.map((employee) => {
    return {
      ...employee,
      startDate: new Date(employee.startDate).toLocaleDateString(),
      dateOfBirth: new Date(employee.dateOfBirth).toLocaleDateString(),
    };
  });
  return formattedEmployees;
};

/**
 * Formats the given key to a human-readable format.
 *
 * @param {string} key - The key to format.
 * @returns {string} - The formatted key.
 */
export const formatKey = (key) => {
  switch (key) {
    case "firstName":
      return "First Name";
    case "lastName":
      return "Last Name";
    case "dateOfBirth":
      return "Date of Birth";
    case "startDate":
      return "Start Date";
    case "street":
      return "Street";
    case "city":
      return "City";
    case "state":
      return "State";
    case "zipCode":
      return "Zip Code";
    case "department":
      return "Department";
    default:
      return key;
  }
};

/**
 * Returns the data type of the given key.
 *
 * @param {string} key - The key to determine the data type for.
 * @returns {string} - The data type of the key.
 */
export const stringOrInt = (key) => {
  switch (key) {
    case "firstName":
      return "string";
    case "lastName":
      return "string";
    case "dateOfBirth":
      return "int";
    case "startDate":
      return "int";
    case "street":
      return "string";
    case "city":
      return "string";
    case "state":
      return "string";
    case "zipCode":
      return "int";
    case "department":
      return "string";
    default:
      return key;
  }
};
