import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import Navbar from "./components/Navbar";
// import useNounFinder from "./utils/Hooks/NounFinderFolder/NounFinder";
import LandingSplash from "./components/LandingSplash";
import BlurbInput from "./components/BlurbInput";
import Container from "react-bootstrap/Container";
import UserPosts from "./components/UserPosts";
function App() {
  useEffect(() => {
    // API.getSongs().then(res => {
    //   console.log("yoooo, in APP.JS");
    //   console.log(res.data);
    // });
    API.getAllUsers().then((res) => {
      console.log("...getting users from DB...");
      console.log(res.data);
    });
    // API.getUserPosts("connorjohn@gmail.com").then( res => {
    //   console.log("hold my baby I passed it to you!!!");
    //   console.log(res.data.blurbs);
    // });
    // API.getNouns("Silly Sally at the Wally wagon red shirt!!!").then( res => {
    //   console.log(res.data);
    // });
  }, []);

  return (
    <div className="App">
      {/* Navigation  or other stuff can go here */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
      <Container>
        <LandingSplash />
        <BlurbInput />
        <UserPosts />
      </Container>
      {/* we might not even want this landing splash thing in the future */}
      {/* perhaps some buttons to continue */}
    </div>
  );
}

export default App;
