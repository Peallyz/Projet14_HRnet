import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  // Reducers are functions that take the current state and an action object, and then return a new state.
  reducers: {
    addEmployee: (state, { payload }) => {
      state.push({ ...payload, id: uuidv4() });
    },
    deleteEmplyee: (state, { payload }) => {
      state.filter((employee) => employee.id !== payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
