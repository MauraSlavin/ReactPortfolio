import React from "react";
import "./Pages.css";
import "./Portfolio.css";

const padding = { padding: "70px 20px 20px"};

export default function Project(props) {


    return (

        <div className="work">

            <div className="project">
                <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
                    <img src={props.image} alt={props.alt} style={padding}  />
                    <h3 className="bg-blue rounded"><strong>{props.name}</strong></h3>
                </a>
            </div> {/* <!-- end of project div for image link to application --> */}

            <div className="project">
                <a href={props.githubLink} className="text-dark" target="_blank" rel="noopener noreferrer">Github page for <strong>{props.name}</strong>.</a>
            </div> {/*  <!-- end of project div for github link --> */}

        {/* <!-- end of Project div --> */}
        </div> 
    );
}