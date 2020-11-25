import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './styles/LandingSplash.css';


export default function LandingSplash() {
    return (
        <>
            <Container className="mt-3" fluid>
                <Jumbotron fluid>
                    <h1 className="text-center">viBee</h1>
                    <p className="mt-4">~~~ f i n d  your  v i b e ~~~</p>
                </Jumbotron>
            </Container>
            
        </>
    )
}
