import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import useNounFinder from "./utils/Hooks/NounFinderFolder/NounFinder";
import LandingSplash from "./components/LandingSplash";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      {/* Navigation  or other stuff can go here */}
      <LandingSplash/>
      {/* we might not even want this landing splash thing in the future */}
      {/* perhaps some buttons to continue */}
    </div>
  );
}


export default App;
