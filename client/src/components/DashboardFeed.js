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

  const handleDateFormat = (date) => {
    let format = React.createElement(TimeAgo, {date: date});
    return format;
 }

  return (
    <div className="mt-3">
      {
        allGlobalPosts.map( blurb => {
          // return <Container className="postDivContainerBackground rounded mb-2 p-2"  key={blurb._id}>
          // <Row>
          //   <Col xs={4}>
          //     <p className="user-name">~~~{blurb.userName}</p>
          //   </Col>
          // </Row>
          // <Row>
          // <Col className="my-auto" xs={2} lg={{span: 2, offset: 0}} >
          // <img className="postSongImage" 
          // //!!Need to change with the thumbnail from the users blurb
          // src={blurb.thumbnail} 
          // height="65px" 
          // width="65px"
          // alt="albumThumbnail"/>
          // </Col>
          // {/* styling can be changed using UserPosts.css file sheet 
          // currently it was just to differentiate how the columns looked
          // and where the data was being created at!!!*/}
          // <Col xs={10} lg={8} className="my-auto" >
          //    <span className="postSongTitle">
          //    {blurb.chosenSongArtist}
          //    </span>
          // </Col>
       
          // </Row>
          // <Row >
          //  <Col xs={12} lg={{span: 11, offset: 1}} className="my-auto" >
          //   <p className="postBlurb">
          //   {blurb.body}
          //   </p>
          //  </Col>
          // </Row>
          // <Row className="postFooter" >
          // <Col xs={8} lg={{span:3, offset: 3 }} className="my-auto">
          //    <p className="postDate">
          //     {handleDateFormat(blurb.time)}
          //    </p>
          // </Col>
          //  <Col xs={4} lg={3} className="postColColor my-auto">
          //  <p>Vibe: <span className="postVibeEmoji">
          //   {blurb.vibe}
          //  </span></p>
          //  </Col>
          // </Row>
          //  </Container>  
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
                  <span className="postSongTitle">
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
                  <p className="postBlurb">
                    {blurb.body}
                  </p>
                </Col>
              </Row>
              <Row className="time-vibe-row">
                <Col className="">
                  <p className="postDate">
                    {handleDateFormat(blurb.time)}
                  </p>
                </Col>
                <Col className="">
                  <p className="postVibeEmoji">Vibe: <span>
                    {blurb.vibe}
                  </span></p>
                </Col>
              </Row>
            </Col>
          </Row>







          {/* <Row>
          <Col className="my-auto" xs={2} lg={{span: 2, offset: 0}} >
          <img className="postSongImage" 
          //!!Need to change with the thumbnail from the users blurb
          src={blurb.thumbnail} 
          height="65px" 
          width="65px"
          alt="albumThumbnail"/>
          </Col>
          {/* styling can be changed using UserPosts.css file sheet 
          currently it was just to differentiate how the columns looked
          and where the data was being created at!!!*/}
          {/* <Col xs={10} lg={8} className="my-auto" >
             <span className="postSongTitle">
             {blurb.chosenSongArtist}
             </span>
          </Col>
       
          </Row>
          <Row >
           <Col xs={12} lg={{span: 11, offset: 1}} className="my-auto" >
            <p className="postBlurb">
            {blurb.body}
            </p>
           </Col>
          </Row>
          <Row className="postFooter" >
          <Col xs={8} lg={{span:3, offset: 3 }} className="my-auto">
             <p className="postDate">
              {handleDateFormat(blurb.time)}
             </p>
          </Col>
           <Col xs={4} lg={3} className="postColColor my-auto">
           <p>Vibe: <span className="postVibeEmoji">
            {blurb.vibe}
           </span></p>
           </Col>
          </Row> */}
           </Container>  
         })
      }
    </div>
  )
}
