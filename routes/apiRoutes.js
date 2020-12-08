const Genius = require("genius-lyrics");
const dotenv = require("dotenv").config();
const Token = process.env.API_GENIUS;
const Client = new Genius.Client(Token);
const router = require("express").Router();
var createNounfinder = require("nounfinder");
var nounFinder = createNounfinder({
  wordnikAPIKey: process.env.API_WORDNIK,
});
const db = require("../models");
// declare the song results here
let firstSong;
let secondSong;
let thirdSong;

const getSongPool = async (stringifiedNounsQuery) => {
  console.log(`Genius-Lyrics v${Genius.Version}`);
  const searches = await Client.songs.search(stringifiedNounsQuery);
  // global vars! they are declared at the top ^^^^^
  firstSong = searches[0];
  secondSong = searches[1];
  thirdSong = searches[2];
  const songPool = [firstSong, secondSong, thirdSong];
  return songPool;
};

// ---------------GET LYRICS FUNCTION
const getLyrics = async (chosenSong) => {
  let lyricRes;
  try {
    lyricRes = await chosenSong.lyrics();
  } catch (error) {
    throw error;
  }
  return lyricRes;
};

// ! remember /api/ is implied in our server.js file
router.get("/songs/:lyrics", (req, res) => {
  console.log("......................inside router.get('/songs/:lyrics')...");
  // array was 'stringified by axios, now we remove the commas
  let stringifiedArray = req.params.lyrics;
  // replace the commas with a space
  stringifiedArray = stringifiedArray.replace(/,/g, " ");
  console.log(stringifiedArray);
  getSongPool(stringifiedArray).then((data) => {
    console.log("successfully returned song pool!");
    res.send(data);
  });
});

// this route gets the lyrics of a particular song
// uses param option inside API.js axios request
router.get("/lyrics/:cardID", (req, res) => {
  console.log("...................inside router.get('/lyrics/:songObj')...");
  const selectedCard = req.params.cardID;
  let singleSong;
  console.log(selectedCard);
  switch (selectedCard) {
    case "1":
      singleSong = firstSong;
      break;
    case "2":
      singleSong = secondSong;
      break;
    default:
      singleSong = thirdSong;
      break;
  }
  getLyrics(singleSong).then((data) => {
    console.log(`successfully got lyrics from the backend!!`);
    res.send(data);
  });
});

// FIND ALL USERS ROUTE
router.get("/users", (req, res) => {
  console.log("................................finding users (l:131)...");
  db.User.find({})
    .then((data) => {
      console.log("found all users");
      res.json(data);
    })
    .catch((err) => res.status(422).json(err));
});

// get all this particular users posts
router.get("/blurbs/:userEmail", (req, res) => {
  console.log("................................finding SPECIFIC USER (l:141)...");
  const {userEmail} = req.params;
  db.User.findOne({email: userEmail}).then( (data) => {
    console.log(".................Found that User you were looking for! (l:144)...");
    // TODO: THIS CODE SHOULD CHECK FOR 'THIS USER HAS NO POSTS' CASE
    // if(data === null){
    //   res.json({message: "you have no posts! vibe out!"});
    // }
    res.json(data);
  })
  .catch( (err) => res.status(422).json(err));
});

// get all global public posts
router.get("/globalPosts", (req, res) => {
  console.log("................................finding global posts and sorting (l:131)...");
  db.GlobalPost.find({}).sort({"time": -1})
          .then((data) => {
            console.log("found all public posts");
            res.json(data);
          })
          .catch((err) => res.status(422).json(err));
});

// CALL NOUN FINDER API AND RETURNS AN ARRAY
router.get("/nouns/:words", (req, res) => {
  console.log("...................... inside router.get('/nouns/:words')");
  const text = req.params.words;
  nounFinder.getNounsFromText(text, function done(error, nouns) {
    if (error) throw error;
    console.log(`Filtered nouns: ${nouns}`);
    res.send(nouns);
  });
});

// ------------------POST ROUTES

router.post("/newUser", (req, res) => {
  console.log(".....................................creating new user...");
  const newUser = req.body;
  console.log("new user below vvvvvvvvvv");
  console.log(newUser);
  db.User.insertMany([newUser]).then((data) => {
    console.log("...................................created new user!");
    res.json(data);
  }).catch( (err) => {
    res.status(422).json(err);
  });
  // res.json({hello: "hello"});

});

router.post("/postGlobal", (req, res) => {
  console.log(".......................................posting global blurb");
  const update = req.body;
  db.GlobalPost.insertMany([update]).then((data) => {
    console.log("inserted one record!");
    res.json(data);
  });
});

router.post("/postBlurb", (req, res) => {
  console.log("........................................posting blurb...");
  const request = req.body;
  // console.log(update);
  // find and update john connor for now
  // update object is found in BlurbInput.js
  db.User.findOneAndUpdate(
    {email: request.email},
    request.update
  ).then((data) => {
    console.log("updated one record!");
    res.json(data);
  });
});

module.exports = router;
