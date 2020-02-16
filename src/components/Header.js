import React from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import './Header.css';


import { BrowserRouter as Router, Route} from "react-router-dom";

function Header() {
  return (
  
  <header class="myHeader">
    {/* <div class="container clearfix"> */}
    <div className="row">
      <div className="col-12 text-center">
        <div className="bg-primary">
          <h1 className="p-3 text-light">Maura M. Slavin</h1> 

          <div id="nav">
            <NavTabs />
          </div>
        </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />

      </div>
    </div>
    
  </header>

    );
}

export default Header;