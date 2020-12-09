import React from 'react'
import Container from "react-bootstrap/Container";
import "./styles/About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageCarousel from "./ImageCarousel";
export default function Steps() {
 return (
  <>
  <ImageCarousel/>
  <Container className="aboutBackground px-0" fluid>
   <Row>
    <Col md="12">
     <img  className="img-fluid welcomeImage" alt="profile" src="https://i.imgur.com/WIZ0EXQ.png" width="640px" height="1px"/>
    </Col>
   </Row>
    </Container>
   
  </>
 )
}
