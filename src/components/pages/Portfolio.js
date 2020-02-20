import React, { useState } from "react";
import "./Pages.css";
import "./Portfolio.css";
import "./images/aqua_marble_seamless.png";
import projects from "./projects.json";
import Project from "./Project";
import Technology from "./Technology";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
const icons = [
    require('./images/icons/burger.png'),
    require('./images/icons/calendar-screenshot.png'),
    require('./images/icons/movie-screenshot.png'),
    require('./images/icons/notetaker.png'),
    require('./images/icons/rewards.png'),
    require('./images/icons/weather-screenshot.png'),
    require('./images/icons/quiz-screenshot.png'),
];


const technologies = ["React", "React-bootstrap", "Bootstrap", "Node.js", "emailjs", "React-router-dom", "html", "css"];

function Portfolio() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  
    <div className="row bg-img blue-border-top mt-0 font-size-18">
      <div className="col-10 offset-1 text-left">

        <h2 className="text-center m-3">Portfolio</h2>
        <div className="text-center">
          <Button className="mb-3 mt-1 project" variant="secondary" onClick={handleShow}>
                        Click for technologies used in this Portfolio App.
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
             <Modal.Title>Technologies Used for this Portfolio App:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    {technologies.map((technology) => (
                        <Technology 
                            technology={technology}
                        />
                    ))}
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close 
              </Button>
          </Modal.Footer>
        </Modal>
        <div className="icons text-light mb-2">

          {projects.map((project, index) => (
            <Project  
              name={project.name}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              image={icons[index]} 
              alt={project.alt}
              technologies={project.technologies}
            />

          ))}

        </div>
      </div>
    </div>
        
  );
}

export default Portfolio;