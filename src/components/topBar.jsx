import React from "react";

const TopBar = () => {
  return <div className="top-bar">
    <div className="left-side">
    <i class="fas fa-chevron-left"></i>
    <i class="fas fa-chevron-right"></i>
    <input type="text" className='search-bar' placeholder="Search"/>
    </div>
    <div className="right-side">
      <div className="user tooltip">
        <div className="user-image-cont"></div>
        <span>Logan Sorensen</span>
        <span className="tooltiptext">Profile</span>
      </div>
      <i class="fas fa-chevron-down tooltip"><span className="tooltiptext">Menu</span></i>
    </div>
    </div>;
};

export default TopBar;
