const Genius = require("genius-lyrics");
const Token = "GjZdsQku4iZ7k9QRw0v3g2PRBRe6zrAe3NzPLBqdA-fBEFC_u1DbxuFF5FZvSxPL";
const Client = new Genius.Client(Token);
const router = require("express").Router();
var createNounfinder = require('nounfinder');
var nounFinder = createNounfinder({
  wordnikAPIKey: 'v0e8pfefcqx3zr3o0ouhz12c48noz2nibg3drs3k1yzb9urvt'
});

// const userController = require("../controllers/userController");
const db = require("../models");

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
    stringifiedArray = stringifiedArray.replace(/,/g, ' ');
    console.log(stringifiedArray);
    test(stringifiedArray).then( data => {
      console.log("successfully returned song pool!");
      res.send(data);
    })
    
});

// FIND ALL USERS ROUTE
router.get("/users", (req, res) => {
  console.log("...finding users...");
  db.User.find( {} ).then( (data) => {
    console.log("found all users");
    res.json(data);
  })
  .catch( (err) => res.status(422).json(err));
});

// CALL NOUN FINDER API AND RETURNS AN ARRAY
router.get("/nouns/:words", (req, res) => {
  console.log("... inside router.get('/nouns/:words')");
  const text = req.params.words
  nounFinder.getNounsFromText(text, function done(error, nouns) {
    if (error) throw error;
    console.log(`Filtered nouns: ${nouns}`);
    res.send(nouns);
  });
});

// ------------------POST ROUTES

router.post("/postBlurb", (req, res) => {
  console.log("...posting blurb...");
  const update = req.body;
  console.log(update);
  // find and update john connor for now
  // update object is found in BlurbInput.js
  db.User.findOneAndUpdate({firstName: "John", lastName: "Connor"}, update)
  .then( (data) => {
    console.log("updated one record!");
    res.json(data);
  })

})

module.exports = router;