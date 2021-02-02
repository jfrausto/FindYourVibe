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

   <Row>

     {/* TITLE  */}
    <Col xs={12}>
     <div className="whiteTextChange instructionsTitle">
     A social media experience like you've never had before
     </div>
     <div className="subtextTitle">
       Vibee is a social media app for users to be able to communicate with others through music and emojis.
     </div>
    </Col>
    </Row>
    
    <Row>
      <Col>
        <div className="howToVibe">
          HOW TO VIBE
        </div>

        

      </Col>
    </Row>

    <Row className="iconsToCenter">
      
      <Col xs={6} sm={4}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ebebeb" className="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>
      <div className="smallHeader">
        SIGN UP
      </div>
      <div className="smallTextDescription">
        Click the signup button to create a new account with Vibee.
      </div>
      </Col>

      <Col xs={6} sm={4}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ebebeb" className="bi bi-info-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
      
      <div className="smallHeader">
        FILL INFO
      </div>
      <div className="smallTextDescription">
      Enter your personal information.
      </div>
      </Col>

      <Col xs={{size:6, offset: 0}} sm={4} >
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ebebeb" class="bi bi-person-check-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
      <div className="smallHeader">
        VIBE AWAY
      </div>
      <div className="smallTextDescription adjustWidth">
        You're all set to start vibing.
        LITMAS!🔥
      </div>
      </Col>

    </Row>

    <Row style={{marginTop: "150px"}}>
      <Col xs={12} className="mt-md-"  md={6}>
        <div className="whiteTextChange aboutusTitle">
          ABOUT US
        </div>
        <div className="whiteTextChange missionMain">
          Lorem Epsum Here at vibee we believe in teamwork and success brings the best of both worlds. You get the limo ride to the front. Hottest styles every shoe every color now if you think that it can be kind of fun. It's really you and nobody other. Who would of thought that a girl like me.
        </div>
      </Col>

      <Col className="mt-3 mt-md-0" xs={6}  md={6}>
        <div className="whiteTextChange missionTitle">
          OUR MISSION
        </div>

        <div className="whiteTextChange missionSmallText">
          HJeres is where I am goihjng to talk about that we want to check in with mental health and whjat reall yu moved us to do this. This should be changed later I am niot even looking at the screen i am just guessing that I am actually typuing things that wil actually be legible for someone else to read.
        </div>
        
      </Col>
        
      <Col className="mt-3 mt-md-0" xs={6} md={{size: 6, offset: 6}}>

           <div className="smallTitle2 whiteTextChange missionTitle">
          WHATY  ANOTHER TITLE
        </div>

        <div className="whiteTextChange missionSmallText">
          Another small subtext these should be smaller than the loem epsum in the column on the left the right one jhust as long but there are 4 orf it so bacwsically each section takes half odf the space if they were nice to each other.
        </div> 
      </Col>
      
      
    </Row>


  </Container>

  </>
 )
}
