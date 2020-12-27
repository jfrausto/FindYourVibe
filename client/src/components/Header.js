import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./styles/Header.css";

export default function Header() {
  const { currentUser } = useAuth();
  const [startLink, setStartLink] = useState("/signup");

  // jump pad for user to go to rest of application
  useEffect(() => {
    if (currentUser != null) {
      setStartLink("/dashboard");
    } else {
      setStartLink("/signup");
    }
  }, [currentUser]);

  return (
    <>
      <div className="headerContainer">
        <main>
          <div className="code">
            <header className="content">
              <h1 className="title">Vibee</h1>
              <div className="text">
                Express yourself and find your vibes. Connect with other people
                through music. Explore how other people are doing and catch a
                vibe.
              </div>
            </header>
            <footer className="footer">
              <Link className="ripple noselect" to={startLink}>
                Get Started
              </Link>
              <Link className="ripple noselect" to="/about">
                Learn More
              </Link>
            </footer>

            <div className="wave"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
          </div>
        </main>
        <img
          className="vibeeLamp"
          src="https://i.imgur.com/iLVITNY.png"
          alt="vibeeLamp"
        />
      </div>
    </>
  );
}
