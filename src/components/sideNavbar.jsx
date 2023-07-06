import React from "react";
import "./sideNavbar.css";

function SideNavbar() {
  return (
    <div>
      <div className="div1">
        <div className="div2"></div>
        <div className="div3">
          <div className="dashboard elements">Dashboard</div>
          <div className="courses elements"><a href="#courses" >Courses</a></div>
          <div className="instructors elements">INSTRUCTORS</div>
          <div className="batches elements">BATCHES</div>
          <div className="students elements">STUDENTS</div>
          <div className="certificates elements">CERTIFICATES</div>
        </div>
        <div className="div4">
          <div className="div5"></div>
          <div className="div6"><img src="profile.svg" alt=""/></div>
          <div className="admin profile">admin</div>
          <div className="lorem-epsum profile">Lorem Ipsum</div>
          <div className="view-profile profile">View Profile</div>
          <div className="sign-out profile">Sign Out</div>
        </div>
        <div className="div7"></div>
        <div className="shoppeal-tech">SHOPPEAL TECH</div>
      </div>
    </div>
  );
}


export default SideNavbar;


