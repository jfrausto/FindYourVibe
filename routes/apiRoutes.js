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

// * params => array, an Array of any type that shuffles the elements
// * shuffles the song pool array!
// * returns the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// * params => stringifiedNounsQuery, is a String
// * Genius API is queried using this string
// * returns an array of objects
const getSongPool = async (stringifiedNounsQuery) => {
  let searches;
  
  try {
    searches = await Client.songs.search(stringifiedNounsQuery);
  } catch (error) {
    return error;
  }
  // shuffle results
  searches =  shuffle(searches);
  // global vars! they are declared at the top ^^^^^
  firstSong = searches[0];
  secondSong = searches[1];
  thirdSong = searches[2];
  let songPool;
  if( searches.length < 3 ){
    songPool = [...searches];
  } else {
    songPool = [firstSong, secondSong, thirdSong];
  }
  return songPool;
};

// * params => a Genius API returned song object
// ! cannot pass this object to front end and back;
// ! this is the reason for the global vars that represent these songs
// * returns a set of lyrics for this chosen song
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

// * getSongsPool()
// * takes in an array or string and stringifies it to be used
// * to query Genius API
// * sends back the song pool array
router.get("/songs/:lyrics", (req, res) => {
  // array was 'stringified by axios, now we remove the commas
  let stringifiedArray = req.params.lyrics;
  // replace the commas with a space
  stringifiedArray = stringifiedArray.replace(/,/g, " ");
  getSongPool(stringifiedArray).then((data) => {
    res.send(data);
  });
});

// * getLyrics(cardID)
// * this route gets the lyrics of a particular song
// * uses param option inside API.js axios request
// * sends back the string of lyrics
router.get("/lyrics/:cardID", (req, res) => {
  const selectedCard = req.params.cardID;
  let singleSong;
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
    res.send(data);
  });
});

// * getAllUsers()
// * query our mongo db for all users
router.get("/users", (req, res) => {
  db.User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(422).json(err));
});

// * getCurrentUser(email)
// * returns all of a specific users info from mongo db
router.get("/users/:userEmail", (req, res) => {
  const { userEmail } = req.params;
  db.User.findOne({email: userEmail}).then((data) => {
    res.json(data);
  }).catch((err) => console.log(err))
});

// * getUserPosts(email)
// * returns all this particular users blurb posts
router.get("/blurbs/:userEmail", (req, res) => {
  const {userEmail} = req.params;
  db.User.findOne({email: userEmail}).then( (data) => {
    // TODO: THIS CODE SHOULD CHECK FOR 'THIS USER HAS NO POSTS' CASE
    // if(data === null){
    //   res.json({message: "you have no posts! vibe out!"});
    // }
    res.json(data);
  })
  .catch( (err) => res.status(422).json(err));
});

// * getAllGlobalPosts()
// * returns all global public posts from mongo db
router.get("/globalPosts", (req, res) => {
  db.GlobalPost.find({}).sort({"time": -1})
          .then((data) => {
            res.json(data);
          })
          .catch((err) => res.status(422).json(err));
});

// * getNouns(stringOfWords)
// * CALL NOUN FINDER API AND RETURNS AN ARRAY OF FILTERED NOUNS
router.get("/nouns/:words", (req, res) => {
  const text = req.params.words;
  nounFinder.getNounsFromText(text, function done(error, nouns) {
    if (error) throw error;
    res.send(nouns);
  });
});

// ! ------------------POST ROUTES

// * postNewUser(user)
// * posts a new user with passed Object
router.post("/newUser", (req, res) => {
  const newUser = req.body;
  db.User.insertMany([newUser]).then((data) => {
    res.json(data);
  }).catch( (err) => {
    res.status(422).json(err);
  });
});

// * postGlobalBlurb(blurb)
// * posts blurb Object
router.post("/postGlobal", (req, res) => {
  const update = req.body;
  db.GlobalPost.insertMany([update]).then((data) => {
    res.json(data);
  });
});

// * postBlurb(blurb)
// * posts blurb object to User model
router.post("/postBlurb", (req, res) => {
  const request = req.body;
  db.User.findOneAndUpdate(
    {email: request.email},
    request.update
  ).then((data) => {
    res.json(data);
  });
});

module.exports = router;
