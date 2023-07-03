import DatePicker from "react-datepicker";
import { departments } from "../data/departments";
import { states } from "../data/states";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CustomModal from "custom-modal-component/dist/CustomModal";

const Form = () => {
  const [dateOfBirth, setSDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    startDate: startDate,
    dateOfBirth: dateOfBirth,
    street: "",
    city: "",
    state: states[0].abbreviation,
    zipCode: "",
    department: departments[0],
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
    setShowCustomModal(true);
  };

  const [showCustomModal, setShowCustomModal] = useState(false);

  return (
    <>
      <CustomModal
        showCustomModal={showCustomModal}
        setShowCustomModal={setShowCustomModal}
      >
        <h2>A new User has been created!</h2>
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
            onChange={(date) => {
              setStartDate(date);
              setEmployee({ ...employee, startDate: date });
            }}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => {
              setSDateOfBirth(date);
              setEmployee({ ...employee, dateOfBirth: date });
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
          <select
            name="state"
            id="state"
            onChange={(e) =>
              setEmployee({ ...employee, state: e.target.value })
            }
          >
            {states.map((state) => (
              <option key={state.name} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

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
          <select
            name="department"
            id="department"
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <button className="link" onClick={HandleSubmit}>
          Save
        </button>
      </form>
    </>
  );
};

export default Form;
