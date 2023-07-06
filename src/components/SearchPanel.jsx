import React from "react";
import "./SearchPanel.css";

function SearchPanel(){
    return <div>
        <div className="search-bar"></div>
        <div className="sort-by">Sort By</div>
        <img src="downArrow.svg" className="search-div" alt="" />
        <div className="search-div1">
          <div className="search-div2"></div>
          <div className="search-div3"></div>
          <div className="search-courses">Search Courses</div>
          <img src="searchbar.svg" className="search-div4" alt="" />
        </div>
    </div>
}

export default SearchPanel;