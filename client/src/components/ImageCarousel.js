import React from 'react';
import Container from "react-bootstrap/Container";
import "./styles/About.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ImageCarousel() {
 return (
   <Jumbotron id="tester">
    <Container>
      <Row>
        <Col xs={6}>
          <div className="mainText">
            FIND YOUR VIBE  
          </div>        
        </Col>
        <Col xs={6}>
        <img className="viBeeLogo" src="https://i.imgur.com/6ESjI55.png" />
        </Col>
      </Row>
   </Container>
   </Jumbotron>
 )
}
