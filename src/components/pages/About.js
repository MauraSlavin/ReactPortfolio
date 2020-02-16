import React from "react";
import photo from "./images/Maura.jpg";
import "./About.css";
import "./images/aqua_marble_seamless.png";


function About() {
  return (
    <div className="row bg-img">
    <div className="col-10 offset-1 text-left">
      <h2 className="text-center m-2">A bit about me...</h2>
       {/* my picture */}
      <img src={photo} id="my-pic" alt="Maura's pic"/>
     
       {/* my paragraph */}
      <p>Hello! I’m Maura Slavin, and I’m excited to get back into coding!</p>

      <p>Maura Slavin is an enthusiastic future full stack web developer. She is loving learning technical skills such
        as HTML5, CSS3, JavaScript, jQuery, Node.js, Java, Express.js, React.js, Database Theory, MongoDB, MySQL,
        Command Line, Git, Slack and more at UNH Coding Boot Camp and was fascinated by the power of programming while
        earning a BS in CS at UVM. Projects developed recently include a Professional Portfolio Website, Finding Films
        (to find a movie the user likes), a Weather application, a Daily Planner, and a Password generator.
      </p>

      <p>
        As president and co-founder of the newly formed 501c3, Marina’s Miles, she expanded her communication,
        organizational and time-management skills, while learning the many intricacies of founding and maintaining a
        charity and planning a public event. Scholarships of $11,000 have been awarded over the past three years, with
        more than twice that invested for future scholarships, while keeping the memory of her daughter alive in a
        meaningful way.
      </p>

      <p>
        She enjoys using Microsoft Office products at home and at work as often as possible, and is loving coding at
        home. She is excited about doing more intellectually stimulating work. Her experience at IBM whetted her taste
        for coding, and she can’t wait to get back into it. There’s nothing like that feeling when code finally works,
        especially in a new language or tool!
      </p>

      <p>
        She enjoys spending time with her family and friends, bicycling, reading, kayaking, hiking and just being
        outside (in almost any kind of
        weather – as long as I’m dressed properly &#x263A).
      </p>

      <p>
        Thank you for visiting my page, and I hope we have the pleasure of meeting soon!
      </p>

    
    </div>
    </div>
  );
}

export default About;