import React from 'react';
import { Link } from "react-router-dom";
import "./styles/About.css";

export default function Header() {
 return (
  <div className="headerContainer">
    <main>
        <div className='code'>
      <header className='content'>
        <h1 className='title'>ViBee</h1>
        <div className='text'>Express yourself and find your vibes. Connect with other people through music. Explore how other people are doing and catch a vibe.</div>
      </header>
      <footer className='footer'>
        <Link className='ripple noselect' to="/signup">Get Started</Link>
        {/* <a className='ripple noselect' href="/signup">Get Started</a> */}
      </footer>
     
      <div className='wave'></div>
      <div className='wave wave2'></div>
      <div className='wave wave3'></div>
    </div>
    </main>
    <svg className="wavySvgBackground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="black" fillOpacity="1" d="M0,0L48,32C96,64,192,128,288,149.3C384,171,480,149,576,128C672,107,768,85,864,69.3C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <svg style={{transform: "rotate(180deg)", backgroundColor: "#0c0c0c", background: "linear-gradient(to top, #050505 0%, #151515 100%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="black" fillOpacity="1" d="M0,0L48,32C96,64,192,128,288,149.3C384,171,480,149,576,128C672,107,768,85,864,69.3C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L48,160C96,192,192,256,288,250.7C384,245,480,171,576,149.3C672,128,768,160,864,197.3C960,235,1056,277,1152,282.7C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,106.7C384,139,480,213,576,229.3C672,245,768,203,864,160C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,229.3C320,245,400,267,480,250.7C560,235,640,181,720,133.3C800,85,880,43,960,74.7C1040,107,1120,213,1200,245.3C1280,277,1360,235,1400,213.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,320L40,272C80,224,160,128,240,80C320,32,400,32,480,32C560,32,640,32,720,26.7C800,21,880,11,960,21.3C1040,32,1120,64,1200,69.3C1280,75,1360,53,1400,42.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
    {/* <svg style={{transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L34.3,181.3C68.6,203,137,245,206,256C274.3,267,343,245,411,224C480,203,549,181,617,170.7C685.7,160,754,160,823,144C891.4,128,960,96,1029,106.7C1097.1,117,1166,171,1234,181.3C1302.9,192,1371,160,1406,144L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg> */}
  </div>
 );
}
