import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import SongCard from "./SongCard";
import "./styles/SongCardContainer.css";

//songpool takes in prop from BlurbInput
//it contains the array of songs from 
//the Genius API call
export default function SongCardContainer({songPool}) {

    return (
        <Container>
            {
            songPool.map(song => {
                return <Row key={song.id} >
                            <Col xs="12" lg={{span: 10, offset: 1}} className="songCardCol my-auto">
                                <SongCard songElement={song}/>   
                            </Col>
                        </Row>
            })  
            } 
        </Container>  
    )
}