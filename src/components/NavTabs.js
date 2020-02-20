import React from "react";
// to make router works
import {Link} from "react-router-dom";
// import "./NavTabs.css";

// MUST use anonymous functions ... () => fcn() ... to pass parameters to a function in JSX
// Thing passed is the name of the component.
// function NavTabs(props) {
function NavTabs() {
  return (
    
    <div className="navbar justify-content-between">

      <ul className="list-unstyled ml-2 mt-2 mb-1">
        <li className="text-light">MauraMSlavin@gmail.com</li>
        <li className="text-light">603.397.8572</li>
      </ul>

      <ul className="nav nav-tabs border-bottom-0">

        <li className="nav-item">
          <Link
            to="/about"
            className={window.location.pathname === "/about"  ? "nav-link text-light" : "nav-link text-light"}
          >About</Link>
        </li>

        <li className="nav-item">
          <Link
            to="/portfolio"
            className={window.location.pathname === "/portfolio"  ? "nav-link text-light" : "nav-link text-light"}
          >Portfolio</Link>
        </li>

        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact"  ? "nav-link text-light" : "nav-link text-light"}
          >Contact</Link>
        </li>
        
      </ul>
    </div>
 
  );
}

export default NavTabs;
