import React from "react";
import "./Header.css";

function Header(){
    return (<div>
        <div className="header">
          <div className="header-div1"></div>
          <img src="ellipse.svg" className="ellipse" alt="" />
          <div className="header-div3">
            <img src="bell.svg" className="bell" alt="" />
            <img src="search.svg" className="search" alt="" />
            <div className="view-website-box"></div>
            <div className="view-website">View Website</div>
            <div className="header-div7"></div>
            <div className="add-course">Add a New Course</div>
            <div className="add-symbol">+</div>
            <img src="msg.svg" className="msg" alt="" />
          </div>
        </div>
    </div>);  
}

export default Header;