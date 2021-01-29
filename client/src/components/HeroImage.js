import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/HeroImage.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Pistol from "./Images/Vibee_F.png";

export default function Instructions() {
 return (
  <>
  {/* <Container fluid>
   
   HERO IMAGE
   <Row >
    <Col  style={{overflow: "hidden"}} className="heroImage">
    <Image src="https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-Landscape-4K-Wallpaper-3840x2160.jpg" fluid />
    </Col>
   </Row>
  </Container> */}

  <Jumbotron id="jumboTronAbout">
  <Container >
    {/* <h1 className="fontTitle"><strong>Vibee</strong></h1>
    <p className="fontBody">
      Social Media Done Right!
    </p> */}
    {/* <img src={Pistol} id="imageCentered"/> */}
  </Container>
</Jumbotron>

  </>
 )
}
