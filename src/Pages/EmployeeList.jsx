import { useDispatch } from "react-redux";
import Header from "../Component/Header";
import Link from "../Component/Link";
import Table from "../Component/Table";
import { populateStore } from "../utils/slice/employee.slice";

const EmployeeList = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header title="Current Employees" />
      <main>
        <div className="button__container">
          <Link destination="/" content="Retour à l'acceuil" />
          <button className="link" onClick={() => dispatch(populateStore())}>
            Populate Store
          </button>
        </div>
        <Table />
      </main>
    </>
  );
};

export default EmployeeList;
