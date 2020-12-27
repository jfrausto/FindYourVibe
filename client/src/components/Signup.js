import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import API from '../utils/API';
import "./styles/SignupLogin.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // adding userName ref, firstName, lastName
  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, userNameRef.current.value);
      let userObj = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        userName: userNameRef.current.value,
        email: emailRef.current.value,
        blurbs: [],
        songCollection: []
      };
      let userObjRes;
      try {
        userObjRes = await API.postNewUser(userObj);
        history.push("/dashboard");
      } catch (error) {
        throw error;
      }
      //This will redirect to dashboard through "/" route
      
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <Link to="/">
            <i className ="far fa-times-circle" />
          </Link>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" ref={firstNameRef} required />
            </Form.Group>
            <Form.Group id="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" ref={lastNameRef} required />
            </Form.Group>
            <Form.Group id="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" ref={userNameRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 submitButton" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 switchLabel">
        Already have an account? <Link className="switchLink" to="/login">Log In</Link>
      </div>
    </>
  );
}
