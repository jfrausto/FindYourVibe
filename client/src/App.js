import React, { useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "./utils/API";
// import useNounFinder from "./utils/Hooks/NounFinderFolder/NounFinder";
import LandingSplash from "./components/LandingSplash";
import BlurbInput from "./components/BlurbInput";
import SongCardContainer from "./components/SongCardContainer";
import Container from "react-bootstrap/Container"

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
      <Container >
      <LandingSplash/>
      <BlurbInput />
      </Container>
      {/* we might not even want this landing splash thing in the future */}
      {/* perhaps some buttons to continue */}
    </div>
  );
}


export default App;
