import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
// import useNounFinder from "./utils/Hooks/NounFinderFolder/NounFinder";

function App() {
  return (
    <div className="App">
      {/* Navigation  or other stuff can go here */}
        <Router>
          <Navbar />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              
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
        {/* we might not even want this landing splash thing in the future */}
        {/* perhaps some buttons to continue */}
    </div>
  )
}

export default App;
