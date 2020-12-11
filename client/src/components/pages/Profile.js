import React from "react";
import {Link} from "react-router-dom";
import "../../App.css";
import Container from "react-bootstrap/Container";
import UserPosts from "../UserPosts";
import Button from "react-bootstrap/Button";
import '../styles/LandingSplash.css';


export default function Profile() {
  return (
    <div>     
      <Container>
      <Link to="/collection" >
        <Button variant="danger" className="my-3">My Collections</Button>
      </Link>
        <UserPosts />
      </Container>
    </div>
  );
}
