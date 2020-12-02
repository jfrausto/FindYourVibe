import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/UserPosts.css";
export default function UserPosts() {
 const [UserBlurbs, setUserBlurbs] = useState([]);
 useEffect(() => {
  // looks for the user based on their email,
  // as of right now the email is hardcoded in
  API.getUserPosts("connorjohn@gmail.com").then( res => {
   setUserBlurbs(res.data.blurbs);
   console.log(res.data.blurbs); //!! THIS CONSOLE LOG REPEATS INDEFINETELY 
 }, [UserBlurbs])
});
 return (
     <>
     {
      UserBlurbs.map(blurb => {
       return   <Container id={blurb._id}>
       <Row  className="postHeader">
       <Col xs={2} >
       <img className="postSongImage my-auto py-1" 
       //!!Need to change with the thumbnail from the users blurb
       src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Bee-Icon-by-MatFine-580x368.jpg" 
       
       height="50px" 
       width="50px"/>
       </Col>
       {/* styling can be changed using UserPosts.css file sheet 
       currently it was just to differentiate how the columns looked
       and where the data was being created at!!!*/}
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
         //!!have to change with emoji plugin to be
         //!!compatible for other browsers
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
