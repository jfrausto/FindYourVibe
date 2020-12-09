import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "../../App.css";
import LandingSplash from "../LandingSplash";
import BlurbInput from "../BlurbInput";
import Container from "react-bootstrap/Container";
import DashboardFeed from "../DashboardFeed";
import socket from "../../utils/socketTest";

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
      <Container>
        <LandingSplash />
        <BlurbInput />
        <DashboardFeed globalPosts={globalPosts}/>
      </Container>
    </div>
  );
}
