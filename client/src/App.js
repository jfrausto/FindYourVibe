import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import useNounFinder from "./utils/Hooks/NounFinderFolder/NounFinder";
import Dashboard from "./components/Dashboard";
import LandingSplash from "./components/LandingSplash";
import BlurbInput from "./components/BlurbInput";

function App() {
  useEffect(() => {
    // API.getSongs().then(res => {
    //   console.log("yoooo, in APP.JS");
    //   console.log(res.data);
    // });
    // API.getAllUsers().then( res => {
    //   console.log("...getting users from DB...");
    //   console.log(res.data);
    // });
    // API.getNouns("Silly Sally at the Wally wagon red shirt!!!").then( res => {
    //   console.log(res.data);
    // });
  }, []);

  return (
    <div className="App">
      {/* Navigation  or other stuff can go here */}
      {/* <Container>
        <LandingSplash />
        <BlurbInput />
      </Container> */}
      {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      > */}
      <Container>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                </div>
              </Container>
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
      {/* we might not even want this landing splash thing in the future */}
      {/* perhaps some buttons to continue */}
    </div>
  );
}

export default App;
