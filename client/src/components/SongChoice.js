import React from "react";
// import { Row, Col, } from "react-bootstrap";
import "./styles/SongChoice.css";

export default function SongChoice() {
    

  return (
    <>
        <div class="songInput">
            <input type="text" placeholder="Have a song in mind?"></input>
            <div class="searchBtn">
                <i class="fas fa-search"></i>
            </div>
            <div class="cancelBtn">
                <i class="fas fa-times"></i>
            </div>
            <div className="musicBtn">
                <i className="fas fa-music"></i>
            </div>
        </div>
    </>
  );
}
