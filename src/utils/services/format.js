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
