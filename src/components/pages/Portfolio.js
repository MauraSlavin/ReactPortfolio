import React from "react";
import "./Pages.css";
import "./Portfolio.css";
import "./images/aqua_marble_seamless.png";
// import icons from "./images/icons";
import proj1Icon from "./images/icons/rewards.png"
// import proj1Icon from "./images/icons/burger.png"

const padding = { padding: "70px 20px 20px"};

function Portfolio() {
  return (

    <div className="mt-0 font-size-18">
      <div>

        <div className="row bg-img blue-border-top">
          <div className="col-10 offset-1 text-left">
            <h2 className="text-center m-3">Portfolio</h2>

            {/* <!-- used work div to treat one project as a whole for formatting -->
            <!-- used project div for making bigger when hovering --> */}

            <div className="icons text-light">
              {/* <!-- Need this div for wrapping --> */}


              {/* <!-- PROJECT 1 --> */}
              <div className="work">

                <div className="project">
                  <a href="https://enigmatic-caverns-81757.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={proj1Icon} alt="Rewards application screenshot" style={padding}/>
                    <h3 className="bg-blue rounded"><strong>Rewards</strong></h3>
                  </a>
                </div> {/* <!-- end of project div for image link to application --> */}

                <div className="project">
                  <a href="https://github.com/MauraSlavin/rewards" target="_blank" rel="noopener noreferrer">Github page for "Rewards."</a>
                </div> {/*  <!-- end of project div for github link --> */}

              </div> {/* <!-- end of Project div --> */}


              {/* <!-- PROJECT 2 --> */}
              <div className="work">

                <div className="project">
                  <a href="https://mauraslavin.github.io/07-movie-API-search/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/movie-screenshot.png" alt="Finding Films application screenshot"/>
                    <h3>Finding Films</h3>
                  </a>
                </div> {/* <!-- end of project div for image link to application --> */ }

                <div className="project">
                  <a href="https://github.com/MauraSlavin/07-movie-API-search" target="_blank" rel="noopener noreferrer">Github page for "Finding
                    Films."</a>
                </div> {/*  <!-- end of project div for github link --> */}

              </div> {/* <!-- end of Project div --> */}


              {/* <!-- PROJECT 3 --> */}
              <div className="work">

                <div className="project">
                  <a href="https://mauraslavin.github.io/Calendar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/calendar-screenshot.png" alt="Daily Planner application screenshot"/>
                    <h3>Daily Planner</h3>
                  </a>
                </div> {/* <!-- end of project div for image link to application --> */ }

                <div className="project">
                  <a href="https://github.com/MauraSlavin/Calendar" target="_blank" rel="noopener noreferrer">Github page for "Daily Planner."</a>
                </div> {/*  <!-- end of project div for github link --> */}

              </div> {/* <!-- end of Project div --> */}


              {/* <!-- PROJECT 4 --> */}
              <div className="work">

                <div className="project">
                  <a href="https://mauraslavin.github.io/Weather/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/weather-screenshot.png" alt="Weather application screenshot"/>
                    <h3>Weather</h3>
                  </a>
                </div> {/* <!-- end of project div for image link to application --> */ }

                <div className="project">
                  <a href="https://github.com/MauraSlavin/Weather" target="_blank" rel="noopener noreferrer">Github page for "Weather."</a>
                </div> {/*  <!-- end of project div for github link --> */}

              </div> {/* <!-- end of Project div --> */}


              {/* <!-- PROJECT 5 --> */}
              <div className="work">

                <div className="project">
                  <a href="https://mauraslavin.github.io/Quiz/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/quiz-screenshot.png" alt="Quiz appliation screenshot"/>
                    <h3>Take a Quiz</h3>
                  </a>
                </div> {/* <!-- end of project div for image link to application --> */ }

                <div className="project">
                  <a href="https://github.com/MauraSlavin/Quiz" target="_blank" rel="noopener noreferrer">Github page for "Quiz."</a>
                </div> {/*  <!-- end of project div for github link --> */}

              </div> {/* <!-- end of Project div --> */}


              {/* <!-- PROJECT 6 --> */}
              <div className="work">

                <div className="project">
                  <a href="https://floating-hamlet-11534.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/burger.png" alt="Burger application screenshot"/>
                    <h3>Devouring Burgers</h3>
                  </a>
                </div> {/* <!-- end of project div for image link to application --> */ }

                <div className="project">
                  <a href="https://github.com/MauraSlavin/burger" target="_blank" rel="noopener noreferrer">Github page for "Burgers."</a>
                </div> {/*  <!-- end of project div for github link --> */}

              </div> {/* <!-- end of Project div --> */}


              {/* <!-- PROJECT 7 --> */}
              <div className="work">

                <div className="project">
                  <a href="https://polar-dawn-99284.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/notetaker.png" alt="Notetaker application screenshot"/>
                    <h3>Note Taker</h3>
                  </a>
                </div> {/* <!-- end of project div for image link to application --> */ }

                <div className="project">
                  <a href="https://github.com/MauraSlavin/notetaker" target="_blank" rel="noopener noreferrer">Github page for "Note Taker."</a>
                </div> {/*  <!-- end of project div for github link --> */}

              </div> {/* <!-- end of Project div --> */}


            </div> {/* <!-- of icons div. --> */}

          </div> 
        </div> 
      </div> 
    </div> 

  );
}

export default Portfolio;