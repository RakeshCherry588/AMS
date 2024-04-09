import { useState, useEffect } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function Timer() {
  const [presentTime, setPresentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [presentDate, setPresentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const intervalTimeId = setInterval(() => {
      setPresentTime(new Date().toLocaleTimeString());
    }, 1000);

    const intervalDateId = setInterval(() => {
      let date = new Date().getDate();
      let month = new Date().toLocaleString("en-US", { month: "long" });
      let year = new Date().getFullYear();
      setPresentDate(`${date} ${month} ${year}`);
    }, 1000);

    return () => {
      clearInterval(intervalTimeId);
      clearInterval(intervalDateId);
    };
  }, []);

  return (
    <>
      <div className="card" id="card">
        <div className="card-body">
          <p id="presenttime">
            <img
              src="https://i.pinimg.com/736x/69/7e/92/697e92b4633f2fc1b399c2073b3898a6.jpg"
              id="imgicon"
              alt="sunriseicon"
            />
            {presentTime}
          </p>
          <div id="today">Today : </div>
          <div id="presentdate">{presentDate}</div>
        </div>
        <NavLink
          to="/attend"
          className="mx-5"
          style={{ position: "relative", top: "-30px" }}
        >
          <button className="btn btn-primary border rounded-pill w-100 mb-3 h-100">
            View Attendance
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Timer;
