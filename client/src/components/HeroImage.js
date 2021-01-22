import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/HeroImage.css";
import Jumbotron from "react-bootstrap/Jumbotron";

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
    <h1 className="fontColor">Vibee</h1>
    <p className="fontColor">
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>

  </>
 )
}
