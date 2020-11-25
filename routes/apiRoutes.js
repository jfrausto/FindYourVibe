const Genius = require("genius-lyrics");
const Token = "GjZdsQku4iZ7k9QRw0v3g2PRBRe6zrAe3NzPLBqdA-fBEFC_u1DbxuFF5FZvSxPL";
const Client = new Genius.Client(Token);
const router = require("express").Router();
var createNounfinder = require('nounfinder');
var nounfinder = createNounfinder({
  wordnikAPIKey: 'v0e8pfefcqx3zr3o0ouhz12c48noz2nibg3drs3k1yzb9urvt'
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
const test = async () => {
//   const startTime = Date.now();
  console.log(`Genius-Lyrics v${Genius.Version}`);
  const searches = await Client.songs.search("Just came back from the gym");
//   return searches;
//   Lets see the first song
//   console.log("length of songs array: "+ searches.length)
  const firstSong = searches[0];
//   console.log("About the Song:\n", firstSong, "\n");
  await wait(1000);
  // Ok lets get the lyrics
  const lyrics = await firstSong.lyrics();
//   console.log("Lyrics of the Song:\n", lyrics, "\n");
  return lyrics;
//   await wait(1000);
};
// test();

// ! -------------------- Define API routes here
// * this matches with /api/songs
// ! remember /api/ is implied in our server.js file
router.get("/songs", (req, res) => {
    console.log("... inside router.get('/songs')...")
    test().then( data => {
      res.send(data);
    })
    
});

// FIND ALL USERS ROUTE
router.route("/users").get(userController.findAll);

// CALL NOUN FINDER API AND RETURNS AN ARRAY
router.get("/nouns/:words", (req, res) => {
  console.log("... inside router.get(:words)")
  const wordsArray = req.params.words
  nounfinder.getNounsFromText(wordsArray, function done(error, nouns) {
    if (error) throw error;
    console.log(`Filtered nouns: ${nouns}`);
    res.send(nouns);
  });
})

module.exports = router;