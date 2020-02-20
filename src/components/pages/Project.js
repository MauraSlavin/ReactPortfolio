import React, { useState } from "react";
// import React from "react";
import "./Pages.css";
import "./Portfolio.css";
import Technology from "./Technology";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import Title from 'react-bootstrap/Title';
// import Header from 'react-bootstrap/Header';
import Modal from 'react-bootstrap/Modal';
// import Body from 'react-bootstrap/Body';
// import Footer from 'react-bootstrap/Footer';


const padding = { padding: "70px 20px 20px"};

export default function Project(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="work">

            <div className="project mb-0">
                <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
                    <img src={props.image} alt={props.alt} style={padding}  />
                    <h3 className="bg-blue rounded"><strong>{props.name}</strong></h3>
                </a>
            </div> {/* <!-- end of project div for image link to application --> */}

            <div className="project mb-0">
                <a href={props.githubLink} className="text-dark" target="_blank" rel="noopener noreferrer">Github page for <strong>{props.name}</strong>.</a>
            </div> {/*  <!-- end of project div for github link --> */}

            <div className="text-center">
                <Button className="mb-3 mt-1 project" variant="secondary" onClick={handleShow}>
                        Click for technologies used.
                </Button>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Technologies Used for {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.technologies.map((technology) => (
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

            

        {/* <!-- end of Project div --> */}
        </div> 
    );
}