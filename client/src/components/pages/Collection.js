import React, {useEffect, useState} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../utils/API";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
export default function Collection() {
 const [UserCollection, setUserCollection] = useState([]);
 useEffect(() => {
  // looks for the user based on their email,
  // as of right now the email is hardcoded in
  API.getUserPosts("connorjohn@gmail.com").then( res => {
   // ! THIS SHOULD FINISH THE CHECK FOR "THIS USER HAS NO POSTS" CASE
   // if(res.data.blurbs === null){
   //    return;
   // }
   setUserCollection(res.data.songCollection);
   console.log(res.data.songCollection);
 })
}, []);
  return (
    <>
         <Container className="mt-3" fluid>
                <Jumbotron fluid>
                    <h1 className="text-center">Collections Page</h1>
                    <p className="mt-4">~~~m y   v i b e s~~~</p>
                </Jumbotron> 
            </Container>
        
          <div className="mt-2">
          {
           UserCollection.map(collection => {
            return <Accordion className="rounded bottom MarginFix px-sm-3">
            <Card className="cardBorder">
                <Accordion.Toggle as={Card.Header} id={1} className="card-selector" eventKey="0">
                    <img height="100px" width="100px"/>   
                    <h4 className="songTitle">
                        {"songElement.songObj.title"} - {"songElement.songObj.artist.name"}
                    </h4>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body> <p className="songLyrics" id={1+3}>
                    {collection.song}
                    {collection.artist}
                    {collection.album}
                    </p></Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
         })
          }
       </div>
    </>
  );
}
