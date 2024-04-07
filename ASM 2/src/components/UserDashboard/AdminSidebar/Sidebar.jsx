import React from 'react';
// import { NavLink, useLocation } from "react-router-dom";
// import { useState } from "react";
import './Sidebar.css';
import category from '../../../assets/category.png'
import MsgImg from '../../../assets/MsgIcon.png'
import refreshIcon from '../../../assets/refreshIcon.png'

function Sidebar() {
  // const location = useLocation();
  // const [sliderTop, setSliderTop] = useState(143);

  // const handleHomeClick = () => {
  //   setSliderTop(145);
  // };

  // const handleChatClick = () => {
  //   setSliderTop(225);
  // };

  // const handleAttendClick = () => {
  //   setSliderTop(310);
  // };

  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <div className='sidebar-container'>
        <div className="category">
            <img src={category} alt="category" />
        </div>
        <div className="MsgImg">
            <img src={MsgImg} alt="MsgImg" />
        </div>
        <div className="refreshIcon" onClick={handleRefreshClick}>
            <img src={refreshIcon} alt="refreshIcon" />
        </div>
    </div>
  );
}
export default Sidebar;
