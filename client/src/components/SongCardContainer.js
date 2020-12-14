import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import SongCard from "./SongCard";
// import SongChoice from "./SongChoice";
import "./styles/SongCardContainer.css";

//songpool takes in prop from BlurbInput
//it contains the array of songs from 
//the Genius API call
export default function SongCardContainer({songPool, handleSongSelect}) {

    return (
        <Container>
            {
            songPool.map(song => {
                return (
                    <Row key={song.songObj.id} >
                        <Col xs="12" lg={{span: 10, offset: 1}} className="songCardCol my-auto">
                            <SongCard songElement={song} handleSongSelect={handleSongSelect}/>   
                        </Col>
                    </Row>
                )
            })
            }
        </Container>  
    )
}