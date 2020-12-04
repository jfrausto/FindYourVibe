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
// const userController = require("../controllers/userController");

let intervals = 0;
const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      intervals += 1;
      console.log("Pausing... (to avoid ratelimiting)\n");
      resolve();
    }, time);
  });
const test = async (stringifiedNounsQuery) => {
  //   const startTime = Date.now();
  console.log(`Genius-Lyrics v${Genius.Version}`);
  const searches = await Client.songs.search(stringifiedNounsQuery);
  //   return searches;
  //   Lets see the first song
  //   console.log("length of songs array: "+ searches.length)
  firstSong = searches[0];
  // await wait(100);
  // const lyrics1 = await firstSong.lyrics();
  // await wait(100);
  secondSong = searches[1];
  // const lyrics2 = await secondSong.lyrics();
  // await wait(100);
  thirdSong = searches[2];
  // const lyrics3 = await thirdSong.lyrics();

  // const songAndLyricPairs = [
  //   { id: 1,
  //     song: firstSong,
  //     lyric: lyrics1
  //   },
  //   { id: 2,
  //     song: secondSong,
  //     lyric: lyrics2
  //   },
  //   { id: 3,
  //     song: thirdSong,
  //     lyric: lyrics3
  //   }
  // ];

  // return songAndLyricPairs;
  const songPool = [firstSong, secondSong, thirdSong];
  return songPool;
  //   console.log("About the Song:\n", firstSong, "\n");
  // await wait(1000);
  // Ok lets get the lyrics
  // const lyrics = await firstSong.lyrics();
  //   console.log("Lyrics of the Song:\n", lyrics, "\n");
  // return lyrics;
  //   await wait(1000);
};
// test();

// ---------------GET LYRICS FUNCTION
const getLyrics = async (chosenSong) => {
  // console.log(`...getting --${chosenSong.title}-- lyrics...`);
  // const searchLyrics = await Client.songs.search(`${singleSong.title} ${singleSong.artist.name}`);
  // const result = searchLyrics[0];
  // await wait(250);
  let lyricRes;
  try {
    lyricRes = await chosenSong.lyrics();
  } catch (error) {
    throw error;
  }
  return lyricRes;
};

// ! -------------------- Define API routes here
// * this matches with /api/songs
// ! remember /api/ is implied in our server.js file
router.get("/songs/:lyrics", (req, res) => {
  console.log("......................inside router.get('/songs/:lyrics')...");
  // array was 'stringified by axios, now we remove the commas
  let stringifiedArray = req.params.lyrics;
  // replace the commas with a space
  stringifiedArray = stringifiedArray.replace(/,/g, " ");
  console.log(stringifiedArray);
  test(stringifiedArray).then((data) => {
    console.log("successfully returned song pool!");
    res.send(data);
  });
});

// this route gets the lyrics of a particular song
// uses param option inside API.js axios request
router.get("/lyrics/:cardID", (req, res) => {
  console.log("...................inside router.get('/lyrics/:songObj')...");
  // let singleSong = JSON.parse(req.query.songObj);
  // console.log(singleSong.title);
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

router.get("/blurbs/:userEmail", (req, res) => {
  console.log("................................finding SPECIFIC USER (l:141)...");
  const {userEmail} = req.params;
  db.User.findOne({email: userEmail}).then( (data) => {
    console.log(".................Found that User you were looking for! (l:144)...");
    // console.log(data);
    // ! THIS CODE SHOULD CHECK FOR 'THIS USER HAS NO POSTS' CASE
    // if(data === null){
    //   res.json({message: "you have no posts! vibe out!"});
    // }
    res.json(data);
  })
  .catch( (err) => res.status(422).json(err));
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

router.post("/postBlurb", (req, res) => {
  console.log("........................................posting blurb...");
  const update = req.body;
  console.log(update);
  // find and update john connor for now
  // update object is found in BlurbInput.js
  db.User.findOneAndUpdate(
    { firstName: "John", lastName: "Connor" },
    update
  ).then((data) => {
    console.log("updated one record!");
    res.json(data);
  });
});

module.exports = router;
