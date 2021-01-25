import React, {useState} from 'react';
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
import SongChoice from "./SongChoice";
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
    const [songAreaVal, setSongAreaVal] = useState("");
    const [SongPoolRes, setSongPoolRes] = useState([]);
    const [selectedSong, setSelectedSong] = useState({
        songID: -1,
        songArtistAlbum: "",
        lyrics: "",
        albumThumbnail: ""
    });
    // button states
    const [isThinking, setIsThinking] = useState(false);
    // make show toast an object to allow for no results error
    const [showToast, setShowToast] = useState({
        emptySong: false,
        noResults: false    
    });
    // ! super important!
    const { currentUser } = useAuth();
    // to link to another page use History
    const history = useHistory();
    
    const searchedWords = (search) => {
        let lyrics = search.split(" ");
        // replace the new lines with <br>
        let removeNewLine = lyrics.map( dirtyWord =>{
                // replace the new line character with html <BR>
                return dirtyWord.replace(/\r?\n|\r/g, " <br/> ");
            }
        );
        // remove special characters
        let removeSpecialChars = removeNewLine.map( words => {
            return words.replace(/[$@%?!.,:-]/g, '');
        });

        // join everything because of stray spaces and new lines into a string
        let stringifiedRemoveSpecialChars = removeSpecialChars.join(" ");
        // now make into an array with the correct split elements
        let cleanedUpArray = stringifiedRemoveSpecialChars.split(" ");

        let input = TextAreaVal;
        input = input.toLowerCase();
        // convert the input string into an array
        // ! could strip special chars here on the input to match better
        let matches = input.split(" ");
        // now apply the highlighting of the words
        let formattedWords = cleanedUpArray.map(word => {
            if (matches.indexOf(word.toLowerCase()) !== -1) {
                return `<span class="match">` + word +`</span>`
            } else {
                return word;
            }
        });  
        return formattedWords.join(" ");
    };

    // should always take in an array of words ([geniusQueryArray]) or String
    // whether they be from Wordnik API
    // or REGEX FUNCTIONS, OR a combination of both
    const handleGeniusCall = async (geniusQueryArray) => {
        
        let geniusRes;
        try {
            geniusRes = await API.getSongsPool(geniusQueryArray);
        } catch (err) {
            throw err;
        }
        console.log(geniusRes);

        // genius error handling for the case of:
        // searching with an empty string, or null, or empty array
        if(typeof geniusRes.data === "string"){
            setIsThinking(false);
            // ? we need to display a message here saying "couldn't find any songs with your post"
            // ? or something
            setShowToast({...showToast, noResults:true});
            await wait(1500);
            nestedSettingToast();
            return;
        }
        // shuffle the song pool for fun!
        const addCountPool = [];
        for (let i = 0; i < geniusRes.data.length; i++) {
            addCountPool.push(
                {
                    count: i+1,
                    songObj: geniusRes.data[i]
                }
            );
            
        }
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
        // cardHead grabs the clicked card
        // allSongCards grabs all cards
        const allSongCards = document.querySelectorAll(".card-selector, .songTitle");
        // go through each card and remove green-bg class
        allSongCards.forEach( (songCard) =>  
            songCard.classList.remove("green-bg")
        )
        // here SET the green-bg on the selected card or BOTH parent and child
        if( cardHead.parentElement.classList[0] === "card-selector"){
            cardHead.parentElement.classList.add("green-bg");
        }
        cardHead.classList.add("green-bg");

        // ! CHECK BEFORE FIRING API CALL
        let shouldPrevent = lyricSearchPrevent(cardHead, choice);
        if(shouldPrevent){
            // leave the function
            // prevents searching for lyrics
            // if already done before
            return;
        }
        let lyricSearchRes;
        // checking for which element user clicked on
        if(cardHead.parentElement.classList[0] === "card-selector" ){
            // this was the child
            try {
                lyricSearchRes = await API.getLyrics(cardHead.parentElement.id);
            } catch (error) {
                throw error;
            }
            // update selected song state with lyrics as well
            setSelectedSong({ 
                songID: choice.songID,
                songArtistAlbum: `${choice.title} - ${choice.artist}`,
                lyrics: lyricSearchRes.data,
                albumThumbnail: choice.wholeObj.thumbnail
            });
            // this section finds which song accordion to populate the lyrics with
            // uses janky id selection that matches up with their parents 'hardcoded' id's
            // ! id's come from songCard.js!
            let integerStringId = parseInt(cardHead.parentElement.id);
            integerStringId = integerStringId + 3;
            let pTag = document.getElementById(`${integerStringId}`);
            let spinnerId = integerStringId + 3;
            let spinnerElem = document.getElementById(`${spinnerId}`);
            spinnerElem.hidden = true;
            let coloredWords = searchedWords(lyricSearchRes.data);
            pTag.innerHTML = coloredWords;
        } else { // this was the parent
            try {
                lyricSearchRes = await API.getLyrics(cardHead.id);
            } catch (error) {
                throw error;
            }
            setSelectedSong({ 
                songID: choice.songID,
                songArtistAlbum: `${choice.title} - ${choice.artist}`,
                lyrics: lyricSearchRes.data,
                albumThumbnail: choice.wholeObj.thumbnail
            });
            let integerStringId = parseInt(cardHead.id);
            integerStringId = integerStringId + 3;
            let pTag = document.getElementById(`${integerStringId}`);
            let spinnerId = integerStringId + 3;
            let spinnerElem = document.getElementById(`${spinnerId}`);
            spinnerElem.hidden = true;
            let coloredWords = searchedWords(lyricSearchRes.data);
            pTag.innerHTML = coloredWords;
        }
            

    }

    // * sets show toast state to false after toast animation ends
    const nestedSettingToast = () => {
        setShowToast({noResults: false, emptySong: false});
        return;
    }

    // prevents quick button pressing to match with toast animation length
    let intervals = 0;
    const wait = (time) =>
        new Promise((resolve) => {
            setTimeout(() => {
                intervals += 1;
                resolve();
            }, time);
    });

    // takes in both actions from the POST and ANALYZE buttons
    const handleButtonClick = async (e) => {
        const buttonPress = e.target.textContent;
        // do not call the api on an empty string
        if(TextAreaVal === "" && buttonPress != "Search") {
            setShowToast({...showToast, emptySong:true});
            
            await wait(1500);
            nestedSettingToast();
            return;
        }
        // if we hit analyze, query genius API with
        // extracted nouns from the text area
        if(buttonPress === "Analyze"){
            setIsThinking(true);

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
            });

            // check for length of the textarea post
            let count = 0;
            for (let i = 0; i < TextAreaVal.length; i++) {
                if(TextAreaVal.charAt(i) !== ''){
                    count = count + 1;
                }
            }

            // we have a short post, call genius with whole string post
            if (count <= 40){
                handleGeniusCall(TextAreaVal);
               
                // exit
                return;
            }
            // if its longer, extract the nouns
            let nounsRes;
            try {
                nounsRes = await API.getNouns(TextAreaVal);
            } catch(err) {
                throw err;
            }
            const nounStringArray = nounsRes.data;
            
            handleGeniusCall(nounStringArray);
        } else if (buttonPress === "Search") {
            setIsThinking(true);
            console.log("Song Area Value: " + songAreaVal)
            //Reset Lyrics section to empty
            let lyricsClass = document.querySelectorAll(".songLyrics");
            lyricsClass.forEach( (elem) => {
                elem.textContent = "";
            });
            setIsThinking(false);
            return;
        }
        else  { // we will submit the post!
            if(TextAreaVal === "" || selectedSong.songArtistAlbum === "") {
                setShowToast({...showToast, emptySong:true});
                await wait(1500);
                nestedSettingToast();
                return;
            }
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
                if ( currentUser) {
                    getUserNameRes = await API.getUserPosts(currentUser.email);
                } else {
                }
            } catch (error) {
                throw error;
            }
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
            
            try {
            await API.postGlobalBlurb(newGlobalModel);
            } catch (error) {
                throw error;
            }
            // EMIT SOCKET EVENT THAT WE POSTED A NEW BLURB
            socket.emit("new blurb post", "whoa! you heard me!");
            // go to profile component
            // history.push("/profile");
        }
    }
    //** This handles the dropdown menu not the state
    const vibeCheck = (vibe) => {
        setCurrentVibe(vibe);
    }

    return (
    <>
        <Container className="mt-3">
            <Row>
                <Col>
                    <SongCardContainer songPool={SongPoolRes} handleSongSelect={handleSongSelect} />
                </Col>
            </Row>
            <Row className="mt-1">
                <Col xs={12} md={{span: 12, offset:0}}>
                    <SongChoice isThinking={isThinking} handleButtonClick={handleButtonClick} setSongArea={setSongAreaVal}/>
                </Col>
            </Row>
            <Row className="mt-1">
                    <Col xs={12} md={{span: 12, offset: 0}}>
                        <TextareaCounter onChange={(e) => setTextAreaVal(e.target.value)} placeholder="What's on your mind? Vibe check?" countLimit={140} rows={3} />
                    </Col>
            </Row>
            <Row>
                <PostToastError showToast={showToast} />
            </Row>
            <Row className="mt-2">
                <ButtonGroup isThinking={isThinking} handleButtonClick={handleButtonClick}/>
                <DropdownMood vibeCheck={vibeCheck}/>
            </Row>
        </Container>
    </>
    )
}