import Header from "../Component/Header";
import Link from "../Component/Link";

const EmployeeList = () => {
  return (
    <>
      <Header title="Current Employees" />
      <main>
        <div id="employee-div" className="container">
          <table id="employee-table" className="display"></table>
          <Link destination="/" content="Retour à l'acceuil" />
        </div>
      </main>
    </>
  );
};

export default EmployeeList;
