import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./styles/About.css";

export default function About() {
 return (
  <>
   {/* <Container>
    <Row>
     <Col xs={12}>
     <div className="profileImg"> <img  src="https://i.imgur.com/hCVt35Q.jpg" height="120" width="120" alt="profilePic"/>
     </div>
     <div className="quote"><p>"My name is Jose I like long walks on the beach with my dog Sinbad"</p>
    </div>
     </Col>
     <Col xs={12}>
      <h2>I should be under</h2>
     </Col>
    </Row>
   </Container> */}
 <Container>
  <Row>
   <Col className="" xs={12} md={8} lg={6}> 
    <div className="aboutContainer">
     <img className="profileImg" src="https://i.imgur.com/hCVt35Q.jpg" height="120" width="120" alt="profilePic"/>
    <div className="quote mt-3 p-3">
     "My name is Jose I like long walks on the beach with my dog sinbad! I want to make a world where I can create a better work environment for some people"
    </div>
    </div>
   </Col> 
   <Col xs={6} md={2} lg={2} className="mt-4">
    <img className="linkedInButton" height="80" width="80" src="https://i.imgur.com/synGrjT.png"/>
   </Col> 
   <Col xs={6} md={1} lg={1} className="mt-4">
    <img src="githubButton" height="80" width="80" src="https://i.imgur.com/7a6lEgS.png"/>
   </Col>
   {/* <Col className="ml-2" xs={12} md={4} lg={4}> 
     
     </Col> */}
  </Row>
 </Container>


  </>
 );
}
