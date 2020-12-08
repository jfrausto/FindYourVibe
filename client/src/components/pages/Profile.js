import React from "react";
import {Link} from "react-router-dom";
import API from "../../utils/API";
import "../../App.css";
import Container from "react-bootstrap/Container";
import LandingSplash from "../LandingSplash";
import UserPosts from "../UserPosts";
import Button from "react-bootstrap/Button";

export default function Profile() {
  return (
    <div>     
      <Container>
      <Link to="/about">
      <Button variant="danger">My Collections</Button>
      </Link>
      <LandingSplash />
        <UserPosts />
      </Container>
    </div>
  );
}
