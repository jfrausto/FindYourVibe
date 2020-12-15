import React from "react";
import {Link} from "react-router-dom";
import "../../App.css";
import Container from "react-bootstrap/Container";
import UserPosts from "../UserPosts";
import Button from "react-bootstrap/Button";
import ProfileDetails from "../ProfileDetails"
import '../styles/LandingSplash.css';


export default function Profile() {
  return (
    <div>     
      <Container>
      <ProfileDetails />
      <UserPosts />
      </Container>
    </div>
  );
}
