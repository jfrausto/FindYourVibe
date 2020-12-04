import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "../../App.css";
import LandingSplash from "../LandingSplash";
import BlurbInput from "../BlurbInput";
import Container from "react-bootstrap/Container";
import UserPosts from "../UserPosts";
// import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  console.log("rendering Dashboard");
  useEffect(() => {
    console.log("rendering Dashboard in useEffect")
    // API.getSongs().then(res => {
    //   console.log("yoooo, in APP.JS");
    //   console.log(res.data);
    // });
    // API.getAllUsers().then((res) => {
    //   console.log("...getting users from DB...");
    //   console.log(res.data);
    // });
    // API.getUserPosts("connorjohn@gmail.com").then( res => {
    //   console.log("hold my baby I passed it to you!!!");
    //   console.log(res.data.blurbs);
    // });
    // API.getNouns("Silly Sally at the Wally wagon red shirt!!!").then( res => {
    //   console.log(res.data);
    // });
  }, []);

  return (
    <div>
      <Container>
        <LandingSplash />
        <BlurbInput />
        <UserPosts />
      </Container>
    </div>
  );
}
