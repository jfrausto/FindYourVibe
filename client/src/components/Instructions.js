import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/Instructions.css";

export default function Instructions() {
 return (
  <>
  <Container>
   <Row>

    {/* LEFT COLUMN */}
    <Col>
    
    </Col>


     {/* MIDDLE COLUMN */}
    <Col>
    
{/* HOW IT WORKS */}
<Col xs={12}>
    <h1>
     HOW IT WORKS
    </h1>
    </Col>
    <Col xs={12}>
    <p>
     STEP
    </p>
    </Col>
    <Col className="ohOne" xs={12}>
    <h2>
     01
    </h2>
    </Col>
    <Col className="divider" xs={12}>
    <h3 style={{fontSize: "14px"}}>
     O

     O
     
     O

     O

     O

     O
     
     O
     
     O
     
     O
     
     O
     
     O
     
     O
     
     O
    </h3>
    </Col>
    
    <Col>
    <Col xs={12}>
    <p>
     STEP
    </p>
    </Col>
    <Col xs={12}>
    <h2>
     02
    </h2>
    </Col>
    <Col className="divider divider2" xs={12}>
    <h3 style={{fontSize: "14px", marginBottom: "40%"}}>
     O

     O
     
     O

     O

     O

     O
     
     O
     
     O
     
     O
     
     O
     
     O
     
     O
     
     O
    </h3>
    </Col>
    </Col>
    <Col xs={12}>
    <Col className="step3Col" xs={12}>
    <p>
     STEP
    </p>
    </Col>
    <Col xs={12}>
    <h2>
     03
    </h2>
    </Col>
    </Col>
    </Col>


     {/* RIGHT COLUMN */}
    <Col>
    
    </Col>

    
   </Row>
  </Container>


  

  </>
 )
}
