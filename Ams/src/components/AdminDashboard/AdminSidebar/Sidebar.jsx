import React from 'react';
import './Sidebar.css';
import category from '../../../assets/category.png'
import MsgImg from '../../../assets/MsgIcon.png'
import refreshIcon from '../../../assets/refreshIcon.png'

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className="category">
            <img src={category} alt="category" />
        </div>
        <div className="MsgImg">
            <img src={MsgImg} alt="MsgImg" />
        </div>
        <div className="refreshIcon">
            <img src={refreshIcon} alt="refreshIcon" />
        </div>
    </div>
  )
}

export default Sidebar