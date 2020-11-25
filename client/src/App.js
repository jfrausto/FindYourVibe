import React, { Component, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";

function App() {
  useEffect(() => {
    API.getSongs().then((res) => {
      console.log("yoooo, in APP.JS");
      console.log(res.data);
    });
    API.getAllUsers().then((res) => {
      console.log("...getting users from DB...");
      console.log(res.data);
    });
  }, []);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
  );
}

export default App;
