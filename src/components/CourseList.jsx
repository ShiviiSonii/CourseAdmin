import React from "react";
import "./CourseList.css";
import course from "../course";

function CourseItem(props) {
  return (
    <div className="course">
      <div className="course-name">{props.courseName}</div>
      <div className="course-description">{props.description}</div>
      <div className="classes-completed">{props.classesCompleted}</div>
      <div className="upcoming-class">{props.upcomingClass}</div>
    </div>
  );
}

function CourseList() {
  return (
    <div className="course-list">
      <div className="course-list2"></div>
      <div className="course-list3">
        {course.map(CourseItem)};
      </div>

      <div className="slider-above"></div>
      <div className="slider-below"></div>
    </div>
  );
}

export default CourseList;
