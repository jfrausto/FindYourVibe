import React, {useEffect, useState} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../utils/API";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "../styles/SongCardContainer.css";

import { useAuth } from '../../contexts/AuthContext';


export default function Collection() {

 const { currentUser } = useAuth();

 const [UserCollection, setUserCollection] = useState([]);


 const uniqByKeepLast = (data, key) => {
   return [
      ...new Map(
        data.map( x => [key(x), x])
      ).values()
   ]
 }
 

 useEffect(() => {
  // looks for the user based on their email,
  // as of right now the email is hardcoded in
  if(currentUser){
    API.getUserPosts(currentUser.email).then( res => {
   // ! THIS SHOULD FINISH THE CHECK FOR "THIS USER HAS NO POSTS" CASE
   // if(res.data.blurbs === null){
   //    return;
   // }
   const removedDups = uniqByKeepLast(res.data.songCollection, it => it.songId);
   setUserCollection(removedDups);
   console.log(removedDups); 
    });
  }
  

}, [currentUser]);

  return (
    <>
         <Container className="mt-3" fluid>
                <Jumbotron id="collectionsJumbotron" fluid>
                    <h1 className="text-center">Collections Page</h1>
                </Jumbotron> 
            </Container>
        
          <Container className="mt-2" fluid>
           <Row>
          {
           UserCollection.map(collection => {
            return <Col xs={6} md={4} lg={3} xl={3} key={collection.songId}>
            <Accordion className="rounded bottom MarginFix px-sm-3" >
            <Card className="cardBorder">
                <Accordion.Toggle as={Card.Header}  className="card-selector" eventKey="0">
                    <img src={collection.albumThumbnail} alt="albumThumbnail" height="100px" width="100px"/>   
                    <h4 className="songTitle">
                        {collection.songArtistAlbum}
                    </h4>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className="cardBody"> 
                 <h4>
                  Lyrics
                 </h4>
                 <p className="songLyrics">
                 
                 {collection.lyrics}
                    </p></Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            </Col>
         })
          }
          </Row>
       </Container>
    </>
  );
}
