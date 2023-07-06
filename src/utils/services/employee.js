export default class EmployeeSortAndFormatService {
  sortEmployees(employees, sortByType, isDesc, sortByText) {
    const formattedEmployees = [...employees];

    if (sortByType && sortByText === "") {
      this.sortEmployeesByType(formattedEmployees, sortByType, isDesc);
      return this.formatDate(formattedEmployees);
    }

    if (!sortByType && sortByText !== "") {
      return this.sortEmployeeByText(
        this.formatDate(formattedEmployees),
        sortByText
      );
    }

    if (sortByType && sortByText !== "") {
      this.sortEmployeesByType(formattedEmployees, sortByType, isDesc);

      return this.sortEmployeeByText(
        this.formatDate(formattedEmployees),
        sortByText
      );
    }

    return this.formatDate(formattedEmployees);
  }

  sortEmployeesByType(employees, sortBy, isDesc) {
    employees.sort((a, b) => {
      if (!isDesc) {
        if (this.stringOrInt(sortBy) === "string") {
          return a[sortBy].localeCompare(b[sortBy]);
        } else {
          return a[sortBy] - b[sortBy];
        }
      }

      if (isDesc) {
        if (this.stringOrInt(sortBy) === "string") {
          return b[sortBy].localeCompare(a[sortBy]);
        } else {
          return b[sortBy] - a[sortBy];
        }
      }
    });
  }

  sortEmployeeByText(employees, text) {
    const filteredObjects = employees.filter((object) => {
      for (let key in object) {
        const value = object[key];

        if (value.toString().toLowerCase().includes(text.toLowerCase())) {
          return true;
        }
      }
      return false;
    });

    return filteredObjects;
  }

  formatDate(employees) {
    const formattedEmployees = employees.map((employee) => {
      return {
        ...employee,
        startDate: new Date(employee.startDate).toLocaleDateString(),
        dateOfBirth: new Date(employee.dateOfBirth).toLocaleDateString(),
      };
    });
    return formattedEmployees;
  }
  formatKey(key) {
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
  }

  stringOrInt = (key) => {
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
}
