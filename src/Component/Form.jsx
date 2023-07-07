import DatePicker from "react-datepicker";
import { departments } from "../utils/data/departments";
import { states } from "../utils/data/states";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CustomModal from "custom-modal-component/dist/CustomModal";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { addEmployee } from "../utils/slice/employee.slice";

const Form = () => {
  const [dateOfBirth, setSDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    startDate: new Date(startDate).getTime(),
    dateOfBirth: new Date(dateOfBirth).getTime(),
    street: "",
    city: "",
    state: states[0].value,
    zipCode: "",
    department: departments[0].value,
  });

  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (
      employee.firstName === "" ||
      employee.lastName === "" ||
      employee.street === "" ||
      employee.city === "" ||
      employee.zipCode === "" ||
      employee.dateOfBirth === "" ||
      employee.startDate === ""
    ) {
      setShowErrorModal(true);
      return;
    }

    dispatch(addEmployee(employee));
    setShowCreationModal(true);
  };

  const [showCreationModal, setShowCreationModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  return (
    <>
      <CustomModal
        showCustomModal={showCreationModal}
        setShowCustomModal={setShowCreationModal}
      >
        <h2>A new User has been created!</h2>
      </CustomModal>
      <CustomModal
        showCustomModal={showErrorModal}
        setShowCustomModal={setShowErrorModal}
        backgroundColor={"#bf0000"}
        color={"#f1f1f1"}
      >
        <h2>Please fill all the fields before saving </h2>
      </CustomModal>
      <form action="#" id="create-employee">
        <div className="user__data">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) =>
              setEmployee({ ...employee, firstName: e.target.value })
            }
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={startDate}
            maxDate={new Date()}
            onChange={(date) => {
              setStartDate(date);
              setEmployee({ ...employee, startDate: new Date(date).getTime() });
            }}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={dateOfBirth}
            maxDate={new Date()}
            onChange={(date) => {
              setSDateOfBirth(date);
              setEmployee({
                ...employee,
                dateOfBirth: new Date(date).getTime(),
              });
            }}
          />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={(e) =>
              setEmployee({ ...employee, street: e.target.value })
            }
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          />

          <label htmlFor="state">State</label>

          <Select
            id="state"
            className="select"
            defaultValue={states[0]}
            options={states}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: "#c5eddf",
                primary: "#37a57e",
              },
            })}
            onChange={(e) => setEmployee({ ...employee, state: e.value })}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            onChange={(e) =>
              setEmployee({ ...employee, zipCode: e.target.value })
            }
          />
        </fieldset>
        <div className="departement">
          <label htmlFor="department">Department</label>
          <Select
            id="department"
            className="select"
            defaultValue={departments[0]}
            options={departments}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: "#c5eddf",
                primary: "#37a57e",
              },
            })}
            onChange={(e) => setEmployee({ ...employee, department: e.value })}
          />
        </div>
        <button className="link" onClick={HandleSubmit}>
          Save
        </button>
      </form>
    </>
  );
};

export default Form;
