import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import "./styles/SongCardContainer.css";
//song element takes in prop from songCardContainer
//BlurbInput => SongCardContainer => SongCard
//songElement is one of three songs from 
//the array
export default function SongCard({songElement, handleSongSelect}) {
    
    return (
        <div>
             <Accordion className="rounded bottom MarginFix px-sm-3">
                    <Card className="cardBorder">
                        <Accordion.Toggle as={Card.Header} id={songElement.count} className="card-selector" eventKey="0" onClick={(e) => handleSongSelect(e, {
                            songID: songElement.songObj.id,
                            title: songElement.songObj.title,
                            artist: songElement.songObj.artist.name,
                            wholeObj: songElement.songObj
                        })}>
                            
                                
                                    <img src={songElement.songObj.thumbnail} className="album-thumbnail" alt="albumThumbnail" height="100px" width="100px"/>   
                                
                                
                                    <p className="songTitle">
                                        {songElement.songObj.title} - {songElement.songObj.artist.name}
                                    </p>
                                
                            
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body> 
                                <Spinner animation="border" variant="warning" className="spinners mt-3" id={songElement.count + 6} />
                                <div className="songLyrics" id={songElement.count+3}>                           
                                {/* giving id and class to each spinner */}                               
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
        </div>
    )
}
