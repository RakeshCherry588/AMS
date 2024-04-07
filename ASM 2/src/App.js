import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";
import Admin from "./components/AdminDashboard/Admin";
import User from "./components/UserDashboard/User";
import Attendence from "./components/AdminDashboard/Attendence/Attendence";



function App(){
  return (
    <>
    <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/attendance" element={<Attendence/>} />
    </Routes>
    </>
  )
}
export default App;