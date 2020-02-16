import React from "react";
// to make router works
import {Link} from "react-router-dom";
// import "./NavTabs.css";

// MUST use anonymous functions ... () => fcn() ... to pass parameters to a function in JSX
// Thing passed is the name of the component.
// function NavTabs(props) {
function NavTabs() {
  return (
    <div className="row">
    <div className="col-12 text-center">
    <ul className="nav nav-tabs text-light">
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/"  ? "nav-link text-light" : "nav-link text-light"}
        >Home</Link>
      </li>
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
    </div>
  );
}

export default NavTabs;
