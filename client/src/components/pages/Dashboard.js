import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "../../App.css";
import BlurbInput from "../BlurbInput";
import Container from "react-bootstrap/Container";
import DashboardFeed from "../DashboardFeed";
import socket from "../../utils/socketTest";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dashboard() {
  const [globalPosts, setGlobalPosts] = useState([]);
  useEffect(() => {
    // getting all users and their posts
    API.getAllGlobalPosts().then((res) => {
      console.log("...got public posts from DB...!!!");
      console.log(res.data);
      setGlobalPosts(res.data);
    });
    // add SOCKET event listener upon mounting this component
    socket.on("updating posts", (allData) => {
      console.log("we got the update over here!!");
      console.log(allData);
      updateGlobalPosts(allData);
      // return () => setGlobalPosts([]);
    });

      return () => {
        socket.off("updating posts");
      }
    
  }, []);

  const updateGlobalPosts = (newData) => {
    setGlobalPosts(newData);
  }
  

  return (
    <div>
      <Container fluid>
        <Row>
          {/* feed column */}
          <Col xs={{span: 12, offset: 0, order: 2}} 
              sm={{span: 10, offset: 1, order: 2}} 
              md={{span: 6, offset: 0, order: 1}}  
              lg={{span: 6, offset: 0, order: 1}} 
              xl={{span: 5, offset: 1, order: 1}} className="global-feed mt-2 mt-sm-2 mt-md-3">
            <DashboardFeed  
              globalPosts={globalPosts}
            />
          </Col>
          {/* input column */}
          <Col className="my-auto" xs={{span:12 , offset: 0, order: 1}} 
          sm={{span: 10, offset: 1, order: 1}} 
          md={{span: 6, offset:0, order: 2}} 
          lg={{span: 6, offset:0, order: 1}}
          xl={{span: 5, offset:0, order: 1}}>
            <BlurbInput />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
