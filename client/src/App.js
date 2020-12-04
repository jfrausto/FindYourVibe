import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Collection from "./components/pages/Collection";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
// import useNounFinder from "./utils/Hooks/NounFinderFolder/NounFinder";

function App() {
  return (
    <div className="App">
      {/* Navigation  or other stuff can go here */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/collection" component={Collection}/>
        </Switch>
      </Router>
      {/* we might not even want this landing splash thing in the future */}
      {/* perhaps some buttons to continue */}
    </div>
  );
}

export default App;
