import { NavLink, useLocation } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { MdOutlineChat } from "react-icons/md";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import "./App.css";
import { useState } from "react";

function Sidebar() {
  const location = useLocation();
  const [sliderTop, setSliderTop] = useState(143);

  const handleHomeClick = () => {
    setSliderTop(145);
  };

  const handleChatClick = () => {
    setSliderTop(225);
  };

  const handleAttendClick = () => {
    setSliderTop(310);
  };

  return (
    <>
      <div id="slideranimation" style={{ top: `${sliderTop}px` }}></div>
      <div
        className="d-flex flex-column justify-content-around ml-3"
        id="sidebar"
      >
        <NavLink
          to="/"
          className={location.pathname === "/" ? "active" : "inactive"}
          id="icon1"
          onClick={handleHomeClick}
        >
          <CiGrid41 style={{ fontSize: "35px" }} />
        </NavLink>
        <MdOutlineChat
          style={{ fontSize: "35px" }}
          id="icon2"
          onClick={handleChatClick}
        />
        <NavLink
          to="/attend"
          className={location.pathname === "/attend" ? "active" : "inactive"}
          id="icon3"
          onClick={handleAttendClick}
        >
          <GiAnticlockwiseRotation style={{ fontSize: "35px" }} />
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;