import React, {useRef, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import TextareaCounter from 'react-textarea-counter';
import './styles/BlurbInput.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from './ButtonGroup';
import DropdownMood from './DropdownMood';
import API from '../utils/API';
import SongCardContainer from "./SongCardContainer";

// input group component that allows user input
export default function BlurbInput() {

    // current state of the value in text area
    const [TextAreaVal, setTextAreaVal] = useState("");
    const [SongPoolRes, setSongPoolRes] = useState([]);
    const [selectedSong, setSelectedSong] = useState({
        songID: -1,
        songArtistAlbum: "",
        lyrics: ""
    });
    useEffect(() => {
        console.log("i changed something");
        console.log(selectedSong.songArtistAlbum);
        // if (selectedSong.is)
    }, [selectedSong]);

    // should always take in an array of words ([geniusQueryArray])
    // whether they be from Wordnik API
    // or REGEX FUNCTIONS, OR a combination of both
    const handleGeniusCall = async (geniusQueryArray) => {
        let geniusRes;
        try {
            geniusRes = await API.getSongsPool(geniusQueryArray);
        } catch (err) {
            throw err;
        }
        console.log("...inside handleGeniusCall front-end...");
        // these are the three songs to display now
        // ? we could add song shuffling to get 3 new songs
        // ? to keep it interesting everytime they hit analyze
        if(typeof geniusRes.data === "string"){
            console.log("Please provide words for genius");
            return;
        }
        console.log(geniusRes);
        setSongPoolRes(geniusRes.data);
    }
    // handles state of the selected song
    const handleSongSelect = async (e, choice) => {
        console.log("yooo");
        // console.log(choice);
        const cardHead = e.target;
        cardHead.classList.add("green-bg");
        // console.log(choice.songID);
        // console.log(choice.title);
        setSelectedSong({
            songID: choice.songID,
            songArtistAlbum: `${choice.title} - ${choice.artist}`,
            lyrics: "TBD",
        })



    }


    // takes in both actions from the POST and ANALYZE buttons
    const handleButtonClick = async (e) => {
        const buttonPress = e.target.innerText;
        // do not call the api on an empty string
        if (TextAreaVal === "") return;
        // if we hit analyze, query genius API with
        // extracted nouns from the text area
        if(buttonPress === "Analyze"){
            let nounsRes;
            try {
                nounsRes = await API.getNouns(TextAreaVal);
            } catch(err) {
                throw err;
            }
            const nounStringArray = nounsRes.data;
            handleGeniusCall(nounStringArray);
        } else { // we will submit the post!
            console.log("post button click!");
        }
    }

    return (
    <>
        <Container className="mt-5">
            <Row>
                <Col>
                <SongCardContainer songPool={SongPoolRes} handleSongSelect={handleSongSelect}/>
                </Col>
            </Row>
            <Row className="mt-2">
                    <Col xs={12} md={{span: 8, offset: 2}}>
                        <TextareaCounter onChange={(e) => setTextAreaVal(e.target.value)} placeholder="What's on your mind?" countLimit={140} rows={3} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <ButtonGroup handleButtonClick={handleButtonClick}/>
                    <DropdownMood />
                </Row>
            </Container>
        </>
    )
}
