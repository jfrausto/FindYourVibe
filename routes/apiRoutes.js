const Genius = require("genius-lyrics");
const dotenv = require("dotenv").config();
const geniusToken = process.env.API_GENIUS;
const wordnikToken = process.env.API_WORDNIK;
const Client = new Genius.Client(geniusToken.toString());
const router = require("express").Router();
var createNounfinder = require("nounfinder");
var nounFinder = createNounfinder({
  wordnikAPIKey: wordnikToken,
});

const userController = require("../controllers/userController");

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
  // const firstSong = searches[0];
  // const secondSong = searches[1];
  // const thirdSong = searches[2];
  const songPool = [searches[0], searches[1], searches[2]];
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

// ! -------------------- Define API routes here
// * this matches with /api/songs
// ! remember /api/ is implied in our server.js file
router.get("/songs/:lyrics", (req, res) => {
  console.log("... inside router.get('/songs/:lyrics')...");
  // array was 'stringified by axios, now we remove the commas
  let stringifiedArray = req.params.lyrics;
  // replace the commas with a space
  stringifiedArray = stringifiedArray.replace(/,/g, " ");
  console.log(stringifiedArray);
  test(stringifiedArray).then((data) => {
    res.send(data);
  });
});

// FIND ALL USERS ROUTE
router.route("/users").get(userController.findAll);

// CALL NOUN FINDER API AND RETURNS AN ARRAY
router.get("/nouns/:words", (req, res) => {
  console.log("... inside router.get('/nouns/:words')");
  const text = req.params.words;
  nounFinder.getNounsFromText(text, function done(error, nouns) {
    if (error) throw error;
    console.log(`Filtered nouns: ${nouns}`);
    res.send(nouns);
  });
});

module.exports = router;
