import React from "react";
import "./Pages.css";
import "./Portfolio.css";
import "./images/aqua_marble_seamless.png";
import projects from "./projects.json";
import Project from "./Project"
 
const icons = [
    require('./images/icons/burger.png'),
    require('./images/icons/calendar-screenshot.png'),
    require('./images/icons/movie-screenshot.png'),
    require('./images/icons/notetaker.png'),
    require('./images/icons/rewards.png'),
    require('./images/icons/weather-screenshot.png'),
    require('./images/icons/quiz-screenshot.png'),
];

function Portfolio() {
  return (
  
    <div className="row bg-img blue-border-top mt-0 font-size-18">
      <div className="col-10 offset-1 text-left">

        <h2 className="text-center m-3">Portfolio</h2>
        <div className="icons text-light mb-2">

          {projects.map((project, index) => (
            <Project  
              name={project.name}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              image={icons[index]} 
              alt={project.alt}
            />

          ))}

        </div>
      </div>
    </div>
        
  );
}

export default Portfolio;