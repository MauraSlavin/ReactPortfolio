import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// rename BrowserRouter to Router (anything can be re-named when imported)
  // Route lets us define routes
import { BrowserRouter as Router, Route} from "react-router-dom";

class PortfolioApp extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };  // end of handlePageChange


  // wrap entire thing in Router.  Let's us use Router stuff in all of JSX
  // Route lets us define routes

  // can create NavLink component, so we're not repeating this 4 times.  See David's code.
  render() {
    return (
      <Router>
        <Header />
        <div>


        </div>
        <Footer />
      </Router>
    );
  }
}

export default PortfolioApp;
