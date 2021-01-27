import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/TrioPictures.css";

export default function TrioPictures() {
 return (
  <>

{/* 

 <img className="leftTrioPicture" src="https://i.imgur.com/hCVt35Q.jpg"/>
    <img className="middleTrioPicture" src="https://dummyimage.com/600x600/ed1c24/fff"/>
    <img className="rightTrioPicture" src="https://i.imgur.com/WIZ0EXQ.png"/>

*/}


  <div className="boxSizing">
    <div className="row">
    <div className="column columnLeft">
      <img src="https://i.imgur.com/hCVt35Q.jpg" alt="StepsPicture" style={{width: "100%"}}/>
    </div>
    <div className="column columnMiddle">
      <img src="https://dummyimage.com/300x200/ed1c24/fff" alt="StepMiddle" style={{width: "100%"}}/>
    </div>
    <div className="column columnRight">
      <img src="https://dummyimage.com/300x200/ffffff/000000" alt="Mountains" style={{width: "100%"}}/>
    </div>
   </div>
  </div>
     

   


  </>
 )
}
