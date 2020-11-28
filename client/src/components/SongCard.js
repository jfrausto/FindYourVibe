import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

//song element takes in prop from songCardContainer
//BlurbInput => SongCardContainer => SongCard
//songElement is one of three songs from 
//the array
export default function SongCard({songElement}) {
    
    return (
        <div>
             <Accordion className="rounded bottom MarginFix px-sm-3">
                    <Card className="cardBorder">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                    <img src={songElement.thumbnail} height="100px" width="100px"/>   
                        <h4 className="songTitle">
                            {songElement.title} - {songElement.artist.name}
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
        </div>
    )
}
