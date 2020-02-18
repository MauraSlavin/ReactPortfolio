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

          <Project 
            name={projects[0].name}
            projectLink={projects[0].projectLink}
            githubLink={projects[0].githubLink}
            image={icons[0]} 
            alt={projects[0].alt}
          />

          <Project 
            name={projects[1].name}
            projectLink={projects[1].projectLink}
            githubLink={projects[1].githubLink}
            image={icons[1]}
            alt={projects[1].alt}
          />

          <Project 
            name={projects[2].name}
            projectLink={projects[2].projectLink}
            githubLink={projects[2].githubLink}
            image={icons[2]}
            alt={projects[2].alt}
          />
          
          <Project 
            name={projects[3].name}
            projectLink={projects[3].projectLink}
            githubLink={projects[3].githubLink}
            image={icons[3]}
            alt={projects[3].alt}
          />
          
          <Project 
            name={projects[4].name}
            projectLink={projects[4].projectLink}
            githubLink={projects[4].githubLink}
            image={icons[4]}
            alt={projects[4].alt}
          />
          
          <Project 
            name={projects[5].name}
            projectLink={projects[5].projectLink}
            githubLink={projects[5].githubLink}
            image={icons[5]}
            alt={projects[5].alt}
          />
          
          <Project 
            name={projects[6].name}
            projectLink={projects[6].projectLink}
            githubLink={projects[6].githubLink}
            image={icons[6]}
            alt={projects[6].alt}
          />
          
        </div>
      </div>
    </div>
        
  );
}

export default Portfolio;