import React from "react";
// import Maura's picture
import photo from "./images/Maura.jpg";
// import style sheet
import "./Pages.css";
// import background picture
import "./images/aqua_marble_seamless.png";
// import resume
import resume from './files/resume.pdf';


function About() {
  return (
    <div>
    
      {/* Links to Github Profile, resume, and LinkedIn Profile */}
      <div>
        <div className="row blue-border-top p-2">

          <div className="col-md-4 col-xs-12 text-left">
            <a href="https://github.com/MauraSlavin" target="_blank"  rel="noopener noreferrer" className="text-light">Link to Github Profile</a>
          </div> 

          <div className="col-md-4 col-xs-12 text-center">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="text-light">Link to resume</a>
          </div>

          <div className="col-md-4 col-xs-12 text-right">
            <a href="https://www.linkedin.com/in/mauraslavin/" target="_blank"  rel="noopener noreferrer" className="text-light">Link to LinkedIn Profile</a>
          </div> 
        </div> 

      </div>

      <div className="row bg-img blue-border-top">        
        <div className="col-10 offset-1 text-left" style={{height: "500px"}}>
          <h2 className="text-center m-3">A bit about me...</h2>
          {/* my picture */}
          <img src={photo} id="my-pic" alt="Maura's pic"/>
        
          {/* my bio */}
          <p>Hello! I’m Maura Slavin, and I’m excited to get back into coding!</p>

          <p>
            I'm an enthusiastic full stack web developer.  I've loved learning technical skills like JavaScript, 
            jQuery, Node.js, Java, Express.js, React.js, Database Theory, MongoDB, MySQL, Command Line, Git, Heroku, 
            Bash, Slack, HTML5, CSS3 and more at University of New Hampshire Coding Boot Camp.  I was fascinated by
            the power of programming while earning a Bachelor of Science in Computer Science at the University of
            Vermont, and still am by new technologies available today!  Projects developed recently include a 
            Professional Portfolio Website, Scheduler, Rewards app (motivating children to do chores), Finding Films,
            Weather application, and Daily Planner.
          </p>

          <p>
            I enjoy using Microsoft Office products at home, as President of a non-profit, and at work as often as possible.
            I am excited about doing more intellectually stimulating work. My experience whetted my appetite for coding,
            and I can’t wait to get back into it!
          </p>

          <p>
            Thank you for visiting my page, and I hope we have the pleasure of meeting soon!
          </p>

        
        </div>
      </div>
 
    </div>
  );
}

export default About;