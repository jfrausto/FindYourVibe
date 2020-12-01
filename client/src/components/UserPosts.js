import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/UserPosts.css";
export default function UserPosts() {
 const [UserBlurbs, setUserBlurbs] = useState([]);
 useEffect(() => {
  API.getUserPosts("connorjohn@gmail.com").then( res => {
   setUserBlurbs(res.data.blurbs);
 }, [])
});
 return (
     <>
     {
      UserBlurbs.map(blurb => {
       return   <Container id={blurb._id}>
       <Row  className="postHeader">
       <Col xs={2} >
       <img className="postSongImage my-auto py-1" src="https://i.imgur.com/hCVt35Q.jpg" height="50px" width="50px"/>
       </Col>
       <Col xs={10} className="my-auto" >
          <span className="postSongTitle">
          {blurb.chosenSongArtist}
          </span>
       </Col>
    
       </Row>
       <Row className="postBody">
        <Col xs={12}>
         <p className="postBlurb my-auto py-1">
         {blurb.body}
         </p>
        </Col>
       </Row>
       <Row className="postFooter">
       <Col xs={8} className="my-auto py-1">
          <p className="postDate">
           {blurb.time}
          </p>
       </Col>
        <Col xs={4} className="my-auto py-1">
        <h5>Vibe: <span className="postVibeEmoji">
         {blurb.vibe}
        </span></h5>
        
        </Col>
       </Row>
        </Container>  
      })
     }
     </>    
 )
}
