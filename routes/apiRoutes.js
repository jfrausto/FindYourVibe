const Genius = require("genius-lyrics");
const Token = "GjZdsQku4iZ7k9QRw0v3g2PRBRe6zrAe3NzPLBqdA-fBEFC_u1DbxuFF5FZvSxPL";
const Client = new Genius.Client(Token);
const router = require("express").Router();

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

// Define API routes here
router.get("/songs", (req, res) => {
    console.log("heyyyyy");
    console.log("... inside router.get('/songs')...")
    test().then( data => {
    //   console.log(data);
      res.send(data);
    })
    
});

module.exports = router;