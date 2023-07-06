import React from "react";
import SideNavbar from "./sideNavbar";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import CourseList from "./CourseList";

function Courses(){
    return (<div>
        <SideNavbar/>
        <Header/>
        <SearchPanel/>
        <CourseList/>
    </div>);
}

export default Courses;