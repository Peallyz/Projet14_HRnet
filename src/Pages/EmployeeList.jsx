import Header from "../Component/Header";
import Link from "../Component/Link";
import Table from "../Component/Table";

const EmployeeList = () => {
  return (
    <>
      <Header title="Current Employees" />
      <main>
        <div id="employee-div" className="container">
          <Link destination="/" content="Retour à l'acceuil" />
        </div>
        <Table />
      </main>
    </>
  );
};

export default EmployeeList;
