import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

//song element takes in prop from songCardContainer
//BlurbInput => SongCardContainer => SongCard
//songElement is one of three songs from 
//the array
export default function SongCard({songElement, handleSongSelect}) {


    return (
        <div>
             <Accordion className="rounded bottom MarginFix px-sm-3">
                    <Card className="cardBorder">
                        <Accordion.Toggle as={Card.Header} className="card-selector" eventKey="0" onClick={(e) => handleSongSelect(e, {
                            songID: songElement.song.id,
                            title: songElement.song.title,
                            artist: songElement.song.artist.name,
                            wholeObj: songElement.song
                            // maybe grab the album and album art
                        })}>
                            <img src={songElement.song.thumbnail} height="100px" width="100px"/>   
                            <h4 className="songTitle">
                                {songElement.song.title} - {songElement.song.artist.name}
                            </h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body> <p className="songLyrics">
                            {songElement.lyric}
                            </p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
        </div>
    )
}
