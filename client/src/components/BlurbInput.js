import React, {useRef, useEffect, useState} from 'react';
import{ useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import TextareaCounter from 'react-textarea-counter';
import './styles/BlurbInput.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from './ButtonGroup';
import DropdownMood from './DropdownMood';
import API from '../utils/API';
import SongCardContainer from "./SongCardContainer";
import PostToastError from "./PostToastError";

import { useAuth } from '../contexts/AuthContext';

// socket
import socket from "../utils/socketTest";

// input group component that allows user input
export default function BlurbInput() {

    // current state of the value in text area
    // current states of all user inputs
    const [currentVibe, setCurrentVibe] = useState("");
    const [TextAreaVal, setTextAreaVal] = useState("");
    const [SongPoolRes, setSongPoolRes] = useState([]);
    const [selectedSong, setSelectedSong] = useState({
        songID: -1,
        songArtistAlbum: "",
        lyrics: "",
        albumThumbnail: ""
    });
    // button states
    const [isThinking, setIsThinking] = useState(false);
    const [showToast, setShowToast] = useState(false);
    // ! super important!
    const { currentUser } = useAuth();
    // to link to another page use History
    const history = useHistory();


    // useEffect(() => {
    //     console.log("i selected a song");
    //     console.log(selectedSong);
    //     // if (selectedSong.is)
    // }, [selectedSong]);

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
            setIsThinking(false);
            return;
        }
        console.log(geniusRes.data);

        const addCountPool = [];
        for (let i = 0; i < 3; i++) {
            addCountPool.push(
                {
                    count: i+1,
                    songObj: geniusRes.data[i]
                }
            );
            
        }
        console.log(addCountPool);
        // update song pool state
        setSongPoolRes(addCountPool);
        setIsThinking(false);
    }

    //  * LYRIC CHECK PREVENT
    // CHECKS IF THIS SONG HAS RENDERED ITS LYRICS ALREADY
    // selected element could be the card head or the title element
    // since we can return them out of handling selectedSong....
    // ...we need to setSelectedSong here too!
    const lyricSearchPrevent = (cardOrTitle, choice) => {
        // title case
        if(cardOrTitle.parentElement.classList[0] === "card-selector") {
            let lyricsAreaId = parseInt(cardOrTitle.parentElement.id) +3;
            let lyricElement = document.getElementById(`${lyricsAreaId}`);
            if(lyricElement.textContent === ""){ 
                // lyrics NOT been requested yet, do not prevent search
                setSelectedSong({ 
                    songID: choice.songID,
                    songArtistAlbum: `${choice.title} - ${choice.artist}`,
                    lyrics: "",
                    albumThumbnail: choice.wholeObj.thumbnail
                });
                return false;
            } else {
                // lyrics have been requested, prevent search
                // remember the lyrics
                setSelectedSong({ 
                    ...selectedSong,
                    songID: choice.songID,
                    songArtistAlbum: `${choice.title} - ${choice.artist}`,
                    albumThumbnail: choice.wholeObj.thumbnail
                });
                return true;
            }
        } else { // card head case
            let lyricsAreaId = parseInt(cardOrTitle.id) +3;
            let lyricElement = document.getElementById(`${lyricsAreaId}`);
            if(lyricElement.textContent === ""){ 
                // lyrics have NOT been requested yet, do not prevent search
                setSelectedSong({ 
                    songID: choice.songID,
                    songArtistAlbum: `${choice.title} - ${choice.artist}`,
                    lyrics: "",
                    albumThumbnail: choice.wholeObj.thumbnail
                });
                return false;
            } else {
                // lyrics have been requested, prevent search
                setSelectedSong({
                    ...selectedSong,
                    songID: choice.songID,
                    songArtistAlbum: `${choice.title} - ${choice.artist}`,
                    albumThumbnail: choice.wholeObj.thumbnail
                });
                return true;
            }
        }
    }

    // handles state of the selected song
    const handleSongSelect = async (e, choice) => {
        const cardHead = e.target;
        console.log(cardHead.id);
        console.log(choice);
        // cardHead grabs the clicked card
        // allSongCards grabs all cards
        const allSongCards = document.querySelectorAll(".card-selector, .songTitle");
        // go through each card and remove green-bg class
        allSongCards.forEach( (songCard) =>  
            songCard.classList.remove("green-bg")
        )
        // here SET the green-bg on the selected card
        if( cardHead.parentElement.classList[0] === "card-selector"){
            cardHead.parentElement.classList.add("green-bg");
        }
        cardHead.classList.add("green-bg");
        console.log(choice);

        // ! CHECK BEFORE FIRING API CALL
        let shouldPrevent = lyricSearchPrevent(cardHead, choice);
        if(shouldPrevent){
            // leave the function
            // prevents searching for lyrics
            // if already done before
            return;
        }
        let lyricSearchRes;
        if(cardHead.parentElement.classList[0] === "card-selector" || true){
            // ! THE JANK; THIS NEEDS TO BE REFACTORED FOR THE IF CASES, COULD BE A LOT CLEANER
            // ! JANKING AROUND WITH THE ID's OF ELEMENTS
            // TODO: -------------------------------------------------
            // TODO: WE NEED TO NOT FIRE AN API CALL EVERYTIME THEY SELECT THE CARD HEADER
            // ! THIS WILL PUT A HUGE STRES ON OUR APP
            if(cardHead.parentElement.classList[0] === "card-selector" ){
                try {
                    lyricSearchRes = await API.getLyrics(cardHead.parentElement.id);
                } catch (error) {
                    throw error;
                }
                console.log("we are back in blurb Input - if ");
                console.log(lyricSearchRes.data);
                setSelectedSong({ 
                    songID: choice.songID,
                    songArtistAlbum: `${choice.title} - ${choice.artist}`,
                    lyrics: lyricSearchRes.data,
                    albumThumbnail: choice.wholeObj.thumbnail
                });
                let integerStringId = parseInt(cardHead.parentElement.id);
                console.log(integerStringId);
                integerStringId = integerStringId + 3;
                let pTag = document.getElementById(`${integerStringId}`);
                let spinnerId = integerStringId + 3;
                let spinnerElem = document.getElementById(`${spinnerId}`);
                spinnerElem.hidden = true;
                pTag.textContent = lyricSearchRes.data;
            } else {
                try {
                    lyricSearchRes = await API.getLyrics(cardHead.id);
                } catch (error) {
                    throw error;
                }
                console.log("we are back in blurb Input - else");
                console.log(lyricSearchRes);
                setSelectedSong({ 
                    songID: choice.songID,
                    songArtistAlbum: `${choice.title} - ${choice.artist}`,
                    lyrics: lyricSearchRes.data,
                    albumThumbnail: choice.wholeObj.thumbnail
                });
                let integerStringId = parseInt(cardHead.id);
                console.log(integerStringId);
                integerStringId = integerStringId + 3;
                let pTag = document.getElementById(`${integerStringId}`);
                let spinnerId = integerStringId + 3;
                let spinnerElem = document.getElementById(`${spinnerId}`);
                spinnerElem.hidden = true;
                pTag.textContent = lyricSearchRes.data;
            }
            
        }

    }

    const nestedSettingToast = () => {
        setShowToast(false);
        return;
    }
    let intervals = 0;
    const wait = (time) =>
        new Promise((resolve) => {
            setTimeout(() => {
                intervals += 1;
                console.log("waiting...");
                resolve();
            }, time);
    });

    // takes in both actions from the POST and ANALYZE buttons
    const handleButtonClick = async (e) => {
        // reset this to false so we can reset to true in case of error
        // setShowToast(false);
        const buttonPress = e.target.textContent;
        // do not call the api on an empty string
        if(TextAreaVal === "") {
            setShowToast(true);
            await wait(1500);
            nestedSettingToast();
            return;
        }
        // if we hit analyze, query genius API with
        // extracted nouns from the text area
        if(buttonPress === "Analyze"){
            setIsThinking(true);
            let nounsRes;
            try {
                nounsRes = await API.getNouns(TextAreaVal);
            } catch(err) {
                throw err;
            }
            const nounStringArray = nounsRes.data;
            // before you execute!!!
            // RESET THE LYRICS SECTION TO empty! ''
            let lyricsClass = document.querySelectorAll(".songLyrics");
            lyricsClass.forEach( (elem) => {
                elem.textContent = "";
            });
            // show spinners again
            let spinnersClass = document.querySelectorAll("spinners");
            spinnersClass.forEach( spinner => {
                spinner.hidden = false;
            })
            handleGeniusCall(nounStringArray);
        } else { // we will submit the post!
            if(TextAreaVal === "" || selectedSong.songArtistAlbum === "") {
                setShowToast(true);
                await wait(1500);
                nestedSettingToast();
                // setShowToast(false);
                return;
            }
            console.log("post button click!");
            const newMongoModelUpdate = {
                $push: {
                    blurbs: {
                        vibe: currentVibe === ""?"🤐": currentVibe,
                        body: TextAreaVal,
                        chosenSongArtist: selectedSong.songArtistAlbum,
                        thumbnail: selectedSong.albumThumbnail
                    },
                    songCollection: {
                        songId: selectedSong.songID,
                        songArtistAlbum: selectedSong.songArtistAlbum,
                        lyrics: selectedSong.lyrics,
                        albumThumbnail: selectedSong.albumThumbnail
                    }
                }
            }
            // add email to the update blurb array request
            let dynamicQuery = {
                email: currentUser.email,
                update: newMongoModelUpdate
            }
            let getUserNameRes;
            try {
                getUserNameRes = await API.getUserPosts(currentUser.email);
            } catch (error) {
                throw error;
            }
            console.log(getUserNameRes.data.userName);
            const newGlobalModel = {
                // write in data that matches our new model
                userName: getUserNameRes.data.userName,
                vibe: currentVibe === ""?"🤐": currentVibe,
                body: TextAreaVal,
                chosenSongArtist: selectedSong.songArtistAlbum,
                thumbnail: selectedSong.albumThumbnail,
            }
            let postRes;
            try {
                postRes = await API.postBlurb(dynamicQuery);
            } catch (error) {
                throw error;
            }
            let globalPostRes;
            try {
                globalPostRes = await API.postGlobalBlurb(newGlobalModel);
            } catch (error) {
                throw error;
            }
            console.log("oh no");
            // EMIT SOCKET EVENT THAT WE POSTED A NEW BLURB
            socket.emit("new blurb post", "whoa! you heard me!");
            console.log("WAITING FOR THIS LOG UNDER ME")
            console.log(postRes);
            // window.location.replace("./profile");
            history.push("/profile");
            // TODO: trigger UI to show all my posts page
        }
    }
    //** This handles the dropdown menu not the state
    const vibeCheck = (vibe) => {
        setCurrentVibe(vibe);
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
            <Row>
                <PostToastError showToast={showToast} />
                {/* need to refactor all of this with cleaner code, less buggy */}
            </Row>
            <Row className="mt-2">
                <ButtonGroup isThinking={isThinking} handleButtonClick={handleButtonClick}/>
                <DropdownMood vibeCheck={vibeCheck}/>
            </Row>
            </Container>
        </>
    )
}