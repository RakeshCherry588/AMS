import React, {useState} from 'react'
import './Attendence.css'
import "bootstrap/dist/css/bootstrap.min.css";
import searchIcon from '../../../assets/searchIcon.png';
import AdminHeader from '../AdminHeader/AdminHeader';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendar } from "react-icons/ci";

const Attendence = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All'); 
  const [selectedStatus, setSelectedStatus] = useState(''); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDepartmentChange = (e) => {
    console.log(e.target.value)
    setSelectedDepartment(e.target.value);
  };
  const handleStatusChange = (e) => {
    console.log(e.target.value)
    setSelectedStatus(e.target.value);
  };

  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const dummydata = [
    {
      "id": 1,
      "name": "Rakesh",
      "department": "Development",
      "date": "1-July-2024",
      "status": "Absent",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 2,
      "name": "John",
      "department": "Tester",
      "date": "5-July-2024",
      "status": "Present",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 3,
      "name": "Sarah",
      "department": "Data Analyst",
      "date": "4-July-2024",
      "status": "Absent",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 4,
      "name": "Mike",
      "department": "Devops",
      "date": "5-July-2024",
      "status": "Present",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 5,
      "name": "Alex",
      "department": "HR",
      "date": "5-July-2024",
      "status": "Absent",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 6,
      "name": "Lisa",
      "department": "Accounts",
      "date": "6-July-2024",
      "status": "Present",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 7,
      "name": "Tom",
      "department": "Manager",
      "date": "5-July-2024",
      "status": "Absent",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 8,
      "name": "Emily",
      "department": "Sales",
      "date": "7-July-2024",
      "status": "Present",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 9,
      "name": "Chris",
      "department": "Design",
      "date": "5-July-2024",
      "status": "Absent",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    },
    {
      "id": 10,
      "name": "Ella",
      "department": "System Admin",
      "date": "8-July-2024",
      "status": "Present",
      "checkin": "09:30",
      "checkout": "18:30",
      "workhours": "10h 2m"
    }
  ];

  let filteredData = dummydata;

  if (selectedDate) {
    filteredData = filteredData.filter(
      (employee) =>
        new Date(employee.date).toLocaleDateString() ===
        selectedDate.toLocaleDateString()
    );
  }

  if (selectedDepartment !== 'All') {
    filteredData = filteredData.filter(
      (employee) => employee.department === selectedDepartment
    );
  }

  if (selectedStatus) {
    filteredData = filteredData.filter(
      (employee) => employee.status === selectedStatus
    );
  }
  
  return (
    <>
    <AdminHeader/>
    <div className='employeeContainer'>
      <div className="employeeHeader my-3">
      <div className='attendenceName'>Attendence Overview</div>
      <div className='container_2'>
            <div className="search-class2">
            <img className="vector" src={searchIcon} alt="vector_img"/>
                  <input 
                      className="quick_search2"
                      type="search"
                      placeholder='Quick Search'
                  />
            </div>
      </div>
      <div className='datePicker'>
      <CiCalendar className='calendarIcon' />
        <DatePicker 
            className='picker'
            selected = {selectedDate}
            onChange={handleDateChange}
            dateFormat="dd MMM yyyy"
            placeholderText={formattedCurrentDate}
        />
      </div>
      <button className='btn btn-primary addEmployeeBtn'>Add Employee</button>
    </div>
    <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>
            <div>
                  <select value={selectedDepartment} onChange={handleDepartmentChange}>
                    <option value="All">Department</option>
                    <option value="Development">Development</option>
                    <option value="Tester">Tester</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Devops">Devops</option>
                    <option value="HR">HR</option>
                    <option value="Accounts">Accounts</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                    <option value="Design">Design</option>
                    <option value="System Admin">System Admin</option>
                  </select>
                </div>
            </th>
            <th>Date</th>
            <th>
            <select value={selectedStatus} onChange={handleStatusChange}>
                    <option value="">Status</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Half Day">Half Day</option>
                    <option value="Late Arrival">Late Arrival</option>
            </select> 
            </th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Work hours</th>
          </tr>
        </thead>
        <tbody>
          {
             filteredData.map(employee => 
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.date}</td>
                <td>{employee.status}</td>
                <td>{employee.checkin}</td>
                <td>{employee.checkout}</td>
                <td>{employee.workhours}</td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div className='attendecePages'>Page 1 of 100</div>
    </div>
    </>
  )
}

export default Attendence