import React from 'react';
import Navbar from "../Navbar";
import Creators from "../Creators";
import TrioPictures from "../TrioPictures";
import HeroImage from "../HeroImage";
import Instructions from "../Instructions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../styles/About.css";

export default function About() {
 return (
  <>
  <div id="outsideContainer">

    <Navbar /> 
    <HeroImage/>
    
    {/* <Container style={{background: "rgb(250, 250, 250, 0.05)", width: "90%"}} fluid>

    </Container> */}
    
    <Instructions/>

    {/* <TrioPictures/> */}
    {/* On Creator.css file */}
    {/* <div className="dividerSpacing">
      MEET THE TEAM
    </div> */}
    <Row>

     <Col xs={12} className="dividerSpacing">
      MEET THE TEAM
     </Col>

    </Row>


    {/* THERES NEEDS TO BE A WAY TO DIVIDE 
        THESE SECTIONS TO LOOK NICE */}
    
    <Creators /> 

  </div>
    
    
  </>
 )
}
