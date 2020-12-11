import React from "react";
import {Link} from "react-router-dom";
import "../../App.css";
import Container from "react-bootstrap/Container";
import LandingSplash from "../LandingSplash";
import UserPosts from "../UserPosts";
import Button from "react-bootstrap/Button";
import ProfileDetails from "../ProfileDetails"

export default function Profile() {
  return (
    <div>     
      <Container>
      {/* <Link to="/collection" >
        <Button variant="danger">My Collections</Button>
      </Link> */}
      {/* <LandingSplash /> */}
      <ProfileDetails />
      <UserPosts />
      </Container>
    </div>
  );
}
