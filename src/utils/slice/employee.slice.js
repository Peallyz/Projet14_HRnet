import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import mockedData from "../data/mockedData";

const initialState = [];

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  // Reducers are functions that take the current state and an action object, and then return a new state.
  reducers: {
    addEmployee: (state, { payload }) => {
      state.push({ ...payload, id: uuidv4() });
    },
    populateStore: (state) => {
      const toAdd = mockedData.map((e) => ({ ...e, id: uuidv4() }));
      state.push(...toAdd);
    },
  },
});

export const { addEmployee, populateStore } = employeeSlice.actions;
export default employeeSlice.reducer;
