import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EmployeeList from "./Pages/EmployeeList";
import Error from "./Pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
