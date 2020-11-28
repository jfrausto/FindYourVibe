import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import "./styles/SongCardContainer.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function SongCardContainer() {
    return (
        <>
        <Container>
            <Row> 
            <Col xs="12" lg={{span: 10, offset: 1}} className="songCardCol my-auto">
                <Accordion className="accordionBorder rounded bottom MarginFix">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                    <img src="https://images.genius.com/aa28a8d003227558c7ca161a144a81eb.300x300x1.jpg" height="100px" width="100px"/>   
                        <h4 className="songTitle">
                            Mardy Bum - Arctic Monkeys
                        </h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body> <p className="songLyrics">
                            Well, now then, mardy bum
                            I've seen your frown and it's like looking down
                            The barrel of a gun
                            And it goes off
                            And out come all these words
                            Oh, there's a very pleasant side to you
                            A side I much prefer
                            It's one that laughs and jokes around
                            Remember cuddles in the kitchen, yeah
                            To get things off the ground
                            And it was up, up and away
                            Oh, but it's right hard to remember that
                            On a day like today
                            When you're all argumentative
                            And you've got the face on
                            Well, now then, mardy bum
                            Oh, I'm in trouble again, aren't I?
                            I thought as much
                            'Cause you turned over there
                            Pulling that silent disappointment face
                            The one that I can't bare
                            </p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            
                <Col xs="12" lg={{span: 10, offset: 1}} className="songCardCol my-auto">
                <Accordion className="accordionBorder rounded">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                    <img src="https://images.genius.com/aa28a8d003227558c7ca161a144a81eb.300x300x1.jpg" height="100px" width="100px"/>   
                        <h4 className="songTitle">
                            Mardy Bum - Arctic Monkeys
                        </h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body> <p className="songLyrics">
                            Well, now then, mardy bum
                            I've seen your frown and it's like looking down
                            The barrel of a gun
                            And it goes off
                            And out come all these words
                            Oh, there's a very pleasant side to you
                            A side I much prefer
                            It's one that laughs and jokes around
                            Remember cuddles in the kitchen, yeah
                            To get things off the ground
                            And it was up, up and away
                            Oh, but it's right hard to remember that
                            On a day like today
                            When you're all argumentative
                            And you've got the face on
                            Well, now then, mardy bum
                            Oh, I'm in trouble again, aren't I?
                            I thought as much
                            'Cause you turned over there
                            Pulling that silent disappointment face
                            The one that I can't bare
                            </p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            
                <Col xs="12" lg={{span: 10, offset: 1}} className="songCardCol my-auto">
                <Accordion className="accordionBorder rounded">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                    <img src="https://images.genius.com/aa28a8d003227558c7ca161a144a81eb.300x300x1.jpg" height="100px" width="100px"/>   
                        <h4 className="songTitle">
                            Mardy Bum - Arctic Monkeys
                        </h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body> <p className="songLyrics">
                            Well, now then, mardy bum
                            I've seen your frown and it's like looking down
                            The barrel of a gun
                            And it goes off
                            And out come all these words
                            Oh, there's a very pleasant side to you
                            A side I much prefer
                            It's one that laughs and jokes around
                            Remember cuddles in the kitchen, yeah
                            To get things off the ground
                            And it was up, up and away
                            Oh, but it's right hard to remember that
                            On a day like today
                            When you're all argumentative
                            And you've got the face on
                            Well, now then, mardy bum
                            Oh, I'm in trouble again, aren't I?
                            I thought as much
                            'Cause you turned over there
                            Pulling that silent disappointment face
                            The one that I can't bare
                            </p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            
            
            </Row>
        </Container>  
        </>
    )
}