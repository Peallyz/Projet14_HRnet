import { useDispatch } from "react-redux";
import Header from "../Component/Header";
import Link from "../Component/Link";
import Table from "../Component/Table";
import { populateStore } from "../utils/slice/employee.slice";
import CustomModal from "custom-modal-component/dist/CustomModal";
import { useState } from "react";

const EmployeeList = () => {
  const dispatch = useDispatch();

  const [showCustomModal, setShowCustomModal] = useState(false);

  return (
    <>
      <Header title="Current Employees" />
      <main>
        <CustomModal
          showCustomModal={showCustomModal}
          setShowCustomModal={setShowCustomModal}
        >
          <h2>You&apos;ve succesfully populate store with employees</h2>
        </CustomModal>
        <div className="button__container">
          <Link destination="/" content="Retour à l'acceuil" />
          <button
            className="link"
            onClick={() => {
              setShowCustomModal(true);
              dispatch(populateStore());
            }}
          >
            Populate Store
          </button>
        </div>
        <Table />
      </main>
    </>
  );
};

export default EmployeeList;
