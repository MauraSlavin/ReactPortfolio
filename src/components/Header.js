import React from "react";
import NavTabs from "./NavTabs";
// import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import './Header.css';


import { BrowserRouter as Router, Route} from "react-router-dom";

function Header() {
  return (
  
    <header>

      <div className="row">
        <div className="col-12 text-center">
          <div className="bg-blue">
            <h1 className="pt-3 pb-0 mb-0 text-light">Maura M. Slavin</h1> 
          </div>
        </div>
      </div>

      <div className="col-12 bg-blue " id="nav">
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
      
    </header>

  );
}

export default Header;