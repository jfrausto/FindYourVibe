import React, { useEffect, useState } from 'react';
import TimeAgo from 'react-timeago';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/DashboardFeed.css";

// VERY SIMILAR TO USERPOSTS.JS
// with a username display field in this one though
export default function DashboardFeed({globalPosts}) {
  const [allGlobalPosts, setAllGlobalPosts] = useState([]);
  
  useEffect(() => {
    setAllGlobalPosts(globalPosts);
    // listen to changes in this prop
  }, [globalPosts])

  // date format translator
  const handleDateFormat = (date) => {
    let format = React.createElement(TimeAgo, {date: date});
    return format;
 }

  return (
    <div className="mt-3">
      {
        allGlobalPosts.map( blurb => {
          return <Container className="postDivContainerBackground rounded mb-2 p-1"  key={blurb._id}>
          <Row>
            {/* left column of post */}
            <Col xs={3} className="my-auto">
              {/* thumbnail row */}
                <Row>
                  <Col>
                    <img className="postSongImage" 
                      //!!Need to change with the thumbnail from the users blurb
                      src={blurb.thumbnail} 
                      height="65px" 
                      width="65px"
                      alt="albumThumbnail"
                    />
                  </Col>
                </Row>
                {/* song and artist row */}
                <Row>
                  <Col>
                  <span className="postSongTitle-dash">
                    {blurb.chosenSongArtist}
                  </span>
                  </Col>
                </Row>
            </Col>
            {/* right column holding username, post, time, and vibe */}
            <Col xs={9}>
              <Row>
                {/* column for username */}
                <Col>
                  <p className="user-name">@{blurb.userName}</p>
                </Col>
              </Row>
              <Row className="blurb-row">
                <Col>
                  <p className="postBlurb-dash">
                    {blurb.body}
                  </p>
                </Col>
              </Row>
              <Row className="time-vibe-row-dash">
                <Col xs={6} className="my-auto post-date-column">
                  <p className="postDate">
                    {handleDateFormat(blurb.time)}
                  </p>
                </Col>
                <Col className="mr-3 mt-auto">
                  <p className="postVibeEmoji-dash">Vibe: <span>
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
