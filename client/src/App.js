import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/pages/About";
// socket instance!
// in its own component
// import socket from "./utils/socketTest";

import Collection from "./components/pages/Collection";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { Container } from "react-bootstrap";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
// import useNounFinder from "./utils/Hooks/NounFinderFolder/NounFinder";

function App() {
  // const [error, setError ] = useState("")
  // const { currentUser, logout } = useAuth()
  // const history = useHistory()
  // 

  return (
    <div className="App">
      {/* Navigation  or other stuff can go here */}
        <Router>
          <Navbar />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/collection" component={Collection}/>
              <PrivateRoute path="/about" component={About}/>
              
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
