const mongoose = require("mongoose");
const db = require("../models");

// This file adds two sample users
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/viBee"
);

const userSeed = [
    {
        firstName: "John",
        lastName: "Connor",
        userName: "hastaLaVista",
        email: "connorjohn@gmail.com",
        blurbs: [{
            vibe: "determined",
            body: "We need to organize",
            chosenSongArtist: "Fade by Kanye West",
            time: Date.now
        }],
        songCollection: [{
            song: "Fade",
            artist: "Kanye West",
            album: "Life of Pablo"
        }]
    },
    {
        firstName: "Sarah",
        lastName: "Connor",
        userName: "TerminatorsAreReal",
        email: "connorsarah@gmail.com",
        blurbs: [{
            vibe: "zen",
            body: "I know what I know, I'm not going crazy. They came for me and they will be back",
            chosenSongArtist: "Fade by Kanye West",
            time: Date.now
        }],
        songCollection: [{
            song: "Dream On",
            artist: "Aerosmith",
            album: "Aerosmith Greatest Hits"
        }]
    }  
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });