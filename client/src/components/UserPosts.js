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
   console.log(res.data.blurbs);
 })
}, []);


 return (
     <Container className="mt-2 postDivContainerBackground">
     {
      UserBlurbs.map(blurb => {
       return   <div  id={blurb._id}>
       <Row>
       <Col className="postColColor my-auto" xs={2} lg={{span: 2, offset: 3}} >
       <img className="postSongImage" 
       //!!Need to change with the thumbnail from the users blurb
       src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Bee-Icon-by-MatFine-580x368.jpg" 
       
       height="50px" 
       width="50px"/>
       </Col>
       {/* styling can be changed using UserPosts.css file sheet 
       currently it was just to differentiate how the columns looked
       and where the data was being created at!!!*/}
       <Col xs={10} lg={4} className="postColColor my-auto" >
          <span className="postSongTitle">
          {blurb.chosenSongArtist}
          </span>
       </Col>
    
       </Row>
       <Row >
        <Col xs={12} lg={{span: 6, offset: 3}} className="postColColor my-auto" >
         <p className="postBlurb">
         {blurb.body}
         </p>
        </Col>
       </Row>
       <Row className="postFooter" >
       <Col xs={8} lg={{span:3, offset: 3 }} className="postColColor my-auto">
          <p className="postDate">
           {blurb.time}
          </p>
       </Col>
        <Col xs={4} lg={3} className="postColColor my-auto">
        <p>Vibe: <span className="postVibeEmoji">
         {blurb.vibe}
        </span></p>
        </Col>
       </Row>
        </div>  
      })
     }
     </Container>    
 )
}
