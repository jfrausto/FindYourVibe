import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Note from "./Images/NotePlaceHolder.png";
import "./styles/Instructions.css";

export default function Instructions() {
 return (
  <>
  <Container>

   {/* FIRST STEP */}
   <Row>
    <Col xs={{span: 8, offset: 2}}>
     <div className="whiteTextChange instructionsTitle">
     A social media experience like you've never had before
     </div>
    </Col>
    <Col xs={8}>
     <div className="whiteTextChange textAlignRight">
      The steps here's some lorem epsium. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
     </div>
    </Col>
    <Col className="mt-4 mt-sm-0" xs={4}>
     <img src={Note} height="80px" width="80px"/>
    </Col>
   </Row>

   {/* SECOND STEP */}
   <Row className="mt-4">
    <Col className="mt-4 mt-sm-0" xs={4}>
     <img  src={Note} height="80px" width="80px"/>
    </Col>
    <Col xs={8}>
     <div className="whiteTextChange">
      The steps here's some lorem epsium. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
     </div>
    </Col>
   </Row>

    {/* THIRD STEP */}
    <Row className="mt-4">
     <Col xs={8}>
      <div className="whiteTextChange textAlignRight">
       The steps here's some lorem epsium. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </div>
     </Col>
     <Col className="mt-4 mt-sm-0" xs={4}>
      <img src={Note} height="80px" width="80px"/>
     </Col>
   </Row>

  </Container>
  </>
 )
}
