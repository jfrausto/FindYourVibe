import React from "react";
import "../../App.css";
import Navbar from "../Navbar";
import Container from "react-bootstrap/Container";
import UserPosts from "../UserPosts";
import { Row, Col } from "react-bootstrap";
import ProfileDetails from "../ProfileDetails"
import '../styles/LandingSplash.css';
import FadeIn from '../FadeIn';


export default function Profile() {
  return (
    <div>
      <Navbar />
      {
        true && (
          <FadeIn  delay={450} duration={650}>
            <Container fluid>
              <Row>
                <Col xs={{span: 12, offset: 0}}
                sm={{span: 8, offset: 2}}
                md={{span: 5, offset: 0}}
                lg={{span: 3, offset: 1}}
                xl={{span: 3, offset: 1}}
                >
                  <ProfileDetails />
                </Col>
                <Col xs={{span: 12, offset: 0}}
                sm={{span: 10, offset: 1}}
                md={{span: 7, offset: 0}}
                lg={{span: 7, offset: 0}}
                xl={{span: 7, offset: 0}}
                >
                  <UserPosts />
                </Col>
              </Row>
            </Container>
          </FadeIn>
        )
      }
      
    </div>
  );
}
