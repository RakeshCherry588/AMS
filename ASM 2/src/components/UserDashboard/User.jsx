import React from "react";
import "../AdminDashboard/Admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import AdminHeader from "./AdminHeader/AdminHeader";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";
import Graphs from "./Charts/Graphs";
import Sidebar from "./AdminSidebar/Sidebar";


function Admin(){
    return(
        <div className="admin">
            <AdminHeader/>
            <div className="sidebarEmp">
            <Sidebar/>
            <EmployeeDetails/>
            </div>
            <Graphs/>
        </div>
        
    )
}

export default Admin;