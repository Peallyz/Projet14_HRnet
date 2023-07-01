import DatePicker from "react-datepicker";
import { departments } from "../data/departments";
import { states } from "../data/states";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [dateOfBirth, setSDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form action="#" id="create-employee">
      <div className="user__data">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          selected={dateOfBirth}
          onChange={(date) => setSDateOfBirth(date)}
        />
      </div>

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" />

        <label htmlFor="city">City</label>
        <input id="city" type="text" />

        <label htmlFor="state">State</label>
        <select name="state" id="state">
          {states.map((state) => (
            <option key={state.name} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" />
      </fieldset>
      <div className="departement">
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Form;
