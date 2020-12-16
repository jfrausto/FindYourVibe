import React from "react";
import {Link} from "react-router-dom";
import "../../App.css";
import Container from "react-bootstrap/Container";
import UserPosts from "../UserPosts";
import { Row, Col} from "react-bootstrap";
import ProfileDetails from "../ProfileDetails"
import '../styles/LandingSplash.css';


export default function Profile() {
  return (
    <div>     
      <Container fluid>
        <Row>
          <Col>
            <ProfileDetails />
          </Col>
          <Col>
            <UserPosts />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
