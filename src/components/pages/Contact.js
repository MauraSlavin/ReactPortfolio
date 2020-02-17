import React from "react";
import "./Pages.css";
import "./images/aqua_marble_seamless.png";
import Form from "./Form"


function Contact() {
  return (  
    <div>

      <div className="row bg-img blue-border-top">
        <div className="col-10 offset-1 text-left">
        
          <h2 className="text-center m-3">I'd love to hear from you!</h2>
    
        </div>
      </div>

      <div className="row bg-img">
        <div className="col-5 offset-4">

          <Form />

        </div>
      </div>
    </div>

  );
}

export default Contact;