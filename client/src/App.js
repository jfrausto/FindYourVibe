import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import useNounFinder from "./utils/Hooks/NounFinderFolder/NounFinder";

function App() {
  let tester = useNounFinder("Hello Darkness My Old Friend...");
  console.log(tester);

  useEffect(() => {
    API.getSongs().then(res => {
      console.log("yoooo, in APP.JS");
      console.log(res.data);
    });
    API.getAllUsers().then( res => {
      console.log("...getting users from DB...");
      console.log(res.data);
    })
  }, []);


  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <h2>Push It Too The Limit</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <hr/>
      <hr/>
      
    </div>
  );
}


export default App;
