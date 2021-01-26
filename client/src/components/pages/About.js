import React from 'react';
import Navbar from "../Navbar";
import Creators from "../Creators";
import HeroImage from "../HeroImage";
import Instructions from "../Instructions";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
export default function About() {
 return (
  <>
    <Navbar /> 
    <HeroImage/>
    <Container style={{background: "rgb(250, 250, 250, 0.05)", width: "90%"}} fluid>
    <Instructions/>
    {/* On Creator.css file */}
    <div className="dividerSpacing">
      MEET THE TEAM
    </div>
    {/* THERES NEEDS TO BE A WAY TO DIVIDE 
        THESE SECTIONS TO LOOK NICE */}
    <Creators /> 

    </Container>
    
  </>
 )
}
