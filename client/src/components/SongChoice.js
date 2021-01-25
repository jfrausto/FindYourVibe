import React from "react";
import { Button } from "react-bootstrap";
import "./styles/SongChoice.css";

export default function SongChoice({handleButtonClick, isThinking, setSongArea}) {
    return (
        <>
            <div class="songInput">
                <input onChange={(e) => {setSongArea(e.target.value)}} className="songSearch" type="text" placeholder="Have a song in mind?"></input>
                <Button onClick={!isThinking ? handleButtonClick : null} className="searchBtn">
                    Search
                </Button>
            </div>
        </>
    );
//   return (
//     <>
//         <div class="songInput">
//             <input  type="text" placeholder="Have a song in mind?"></input>
//             <div className="searchBtn">
//                 <i className="fas fa-search"></i>
//             </div>
//             <div onClick={console.log("CLOSE BUTTON")} className="cancelBtn">
//                 <i className="fas fa-times"></i>
//             </div>
//             <div className="musicBtn">
//                 <i className="fas fa-music"></i>
//             </div>
//         </div>
//     </>
//   );
}
