import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./router/admin/Admin";
import CreateUser from "./components/create-user/CreateUser";
import ManageUser from "./components/manage-user/ManageUser";
import "./App.css";
import "./sass/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="user-create" element={<CreateUser />} />
          <Route path="user-manage" element={<ManageUser />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
