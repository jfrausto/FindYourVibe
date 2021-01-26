import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "./styles/SongChoice.css";

export default function SongChoice({handleButtonClick, isSearching, setSongArea}) {
    return (
        <>
            <div class="songInput">
                <input onChange={(e) => {setSongArea(e.target.value)}} className="songSearch" type="text" placeholder="Have a song in mind?"></input>
                <Button variant="warning" onClick={!isSearching ? handleButtonClick : null} className="searchBtn">
                    {isSearching ? <div><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Searching</div> : "Search"}
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
