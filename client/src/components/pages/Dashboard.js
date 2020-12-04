import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "../../App.css";
import LandingSplash from "../LandingSplash";
import BlurbInput from "../BlurbInput";
import Container from "react-bootstrap/Container";
// import UserPosts from "../UserPosts";

import DashboardFeed from "../DashboardFeed";
import socket from "../../utils/socketTest";

export default function Dashboard() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    // getting all users and their posts
    API.getAllUsers().then((res) => {
      console.log("...getting users from DB...");
      console.log(res.data);
    });
    // emit event
    // or add event listener
  }, []);

  return (
    <div>
      <Container>
        <LandingSplash />
        <BlurbInput />
        <UserPosts />
        {/* <DashboardFeed allBlurbsArray={allBlurbsArray}/> */}
      </Container>
    </div>
  );
}
