import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/pages/Homepage";
// socket instance!
// in its own component
// import socket from "./utils/socketTest";
import About from "./components/pages/About";
import Collection from "./components/pages/Collection";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

function App() {

  return (
    <>
    <div className="App">
        <Router>
          {/* AuthProvider surrounds all components
          to provide access to firebase  */}
          <AuthProvider>
            <Switch>
              {/* Private routes checks for 'logged in' status
              and redirects users to login component */}
              <Route exact path="/" component={Homepage} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/collection" component={Collection}/>
              <PrivateRoute path="/dashboard" component={Dashboard}/>
              <Route path="/about" component={About} />              
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
        
    </div>
    </>
  )
}

export default App;
