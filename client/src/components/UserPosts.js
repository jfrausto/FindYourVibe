import React, { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import Container from "react-bootstrap/Container";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/UserPosts.css";

import { useAuth } from "../contexts/AuthContext";

export default function UserPosts() {
 // ! super important!
 const { currentUser } = useAuth();
 const [UserBlurbs, setUserBlurbs] = useState([]);
   useEffect(() => {
  // looks for the user based on their email,
  // as of right now the email is hardcoded in
  if(currentUser){
      API.getUserPosts(currentUser.email).then( res => {
      // ! THIS SHOULD FINISH THE CHECK FOR "THIS USER HAS NO POSTS" CASE
      // if(res.data.blurbs === null){
      //    return;
      // }
      setUserBlurbs(res.data.blurbs);
      console.log(`${res.data.blurbs} is the data passed into setUserBlurbs`);
   });
  }
}, [currentUser]);

// Changes the date to show how much time has passed from today 
// ex. 5 minutes ago. The package will change from hour to days 
//automatically if there is syntax issue the default can be 
//changed. 
const handleDateFormat = (date) => {
   let format = React.createElement(TimeAgo, {date: date});
   return format;
}
 return (
     <div className="mt-2">
     {
        //!! .reverse() returns a reference of userBlurbsArray 
      UserBlurbs.reverse().map(blurb => {
      //  return <Container className="postDivContainerBackground mb-2 p-2"  key={blurb._id}>
      //  <Row>
      //  <Col className="postColColor my-auto" xs={2} lg={{span: 2, offset: 3}} >
      //  <img alt="albumThumbnail" className="postSongImage" 
      //  //!!Need to change with the thumbnail from the users blurb
      //  src={blurb.thumbnail} 
      //  height="50px" 
      //  width="50px"/>
      //  </Col>
      //  <Col xs={10} lg={4} className="postColColor my-auto" >
      //     <span className="postSongTitle">
      //     {blurb.chosenSongArtist}
      //     </span>
      //  </Col>
    
      //  </Row>
      //  <Row >
      //   <Col xs={12} lg={{span: 6, offset: 3}} className="postColColor my-auto" >
      //    <p className="postBlurb">
      //    {blurb.body}
      //    </p>
      //   </Col>
      //  </Row>
      //  <Row className="postFooter" >
      //  <Col xs={8} lg={{span:3, offset: 3 }} className="postColColor my-auto">
      //     <p className="postDate">
      //      {handleDateFormat(blurb.time)}
      //     </p>
      //  </Col>
      //   <Col xs={4} lg={3} className="postColColor my-auto">
      //   <p>Vibe: <span className="postVibeEmoji">
      //    {blurb.vibe}
      //   </span></p>
      //   </Col>
      //  </Row>
      //   </Container>  

      return <Container className="postDivContainerBackground rounded mb-2 p-2"  key={blurb._id}>
          <Row>
            {/* left column of post */}
            <Col xs={3} className="my-auto">
              {/* thumbnail row */}
                <Row>
                  <Col>
                    <img alt="albumThumbnail" className="postSongImage" 
                        src={blurb.thumbnail} 
                        height="80px" 
                        width="80px"
                     />
                  </Col>
                </Row>
                {/* song and artist row */}
                <Row>
                  <Col>
                  <span className="postSongTitle">
                    {blurb.chosenSongArtist}
                  </span>
                  </Col>
                </Row>
            </Col>
            {/* right column holding username, post, time, and vibe */}
            <Col xs={9}>
              <Row>
                <Col>
                  <p className="postBlurb mt-2">
                    {blurb.body}
                  </p>
                </Col>
              </Row>
              <Row className="time-vibe-row">
                <Col className="post-date-column my-auto">
                  <p className="postDate">
                    {handleDateFormat(blurb.time)}
                  </p>
                </Col>
                <Col className="mr-2 mt-auto" post-vibe-column >
                  <p className="postVibeEmoji">Vibe: <span>
                    {blurb.vibe}
                  </span></p>
                </Col>
              </Row>
            </Col>
          </Row>
          </Container>
      })
     }
     </div>    
 )
}
