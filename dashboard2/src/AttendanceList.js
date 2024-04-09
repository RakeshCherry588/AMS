import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Table from "./Table";

function Attendancelist() {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
  };
  return (
    <>
      <div className="d-flex justify-content-around" id="attendancelist">
        <div>
          <h3>Attendance Overview</h3>
        </div>
        <div>
          <nav>
            <li>
              <label>
                <input type="radio" name="category" />
                All
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" />
                Present
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" />
                Half Day
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" />
                Absent
              </label>
            </li>
          </nav>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowCalendar(!showCalendar)}
            >
              📅
            </span>
            <span style={{ marginLeft: "10px" }}>
              {`${date.getDate()} ${date.toLocaleDateString("en-US", {
                month: "long",
              })} ${date.getFullYear()}`}
            </span>
          </div>
          {showCalendar && (
            <div
              style={{
                position: "relative",
                top: "10px",
                width: "250px",
              }}
            >
              <Calendar onChange={handleDateChange} value={date} />
            </div>
          )}
        </div>
      </div>
      <Table />
    </>
  );
}
export default Attendancelist;
