const mongoose = require("mongoose");
const { GlobalPost } = require("../models");
const db = require("../models");

// This file adds two sample users
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/viBee", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// const newTime = new Date.now;
const userSeed = [
    {
        firstName: "John",
        lastName: "Connor",
        userName: "hastaLaVista",
        email: "connorjohn@gmail.com",
        blurbs: [{
            _id: mongoose.Types.ObjectId(),
            vibe: "determined",
            body: "We need to organize",
            chosenSongArtist: "Fade by Kanye West",
            thumbnail: "https://via.placeholder.com/150",
            time: new Date(new Date().toISOString())
        }],
        songCollection: [{
           songId: "274321",
           songArtistAlbum: "Fade - Kanye West",
           lyrics: `[Intro: Rare Earth]
           Your love is fadin'
           Your love is fadin'
           Your love is fadin'
           I feel it's fadin'
           
           [Chorus: Ty Dolla $ign & Rare Earth]
           When no one ain't around (I feel it's fadin')
           I think I think too much (I feel it's fadin')
           Ain't nobody watchin' (I feel it's fadin')
           I just fade away
           
           [Bridge: Ty Dolla $ign & Rare Earth]
           I feel it
           Fade away
           I feel it
           I feel it
           Fade away-ay-ay-ay
           I think I think too much
           I feel it
           Your love is fadin'
           I feel it
           
           [Verse 1: Kanye West + Rare Earth & Ty Dolla $ign]
           Roll up, roll up; hold up, hold up; po' up, po' up
           I feel it
           I love to... I wanna... I'm tryna...
           I feel it
           I'ma rock the boat, work the middle 'til it hurt a little
           I feel it
           Your love is fadin'
           I feel it
           Fuckin' with a real ass nigga
           I feel it
           Fuck how you feel ass nigga
           I feel it
           Bitch better act like you know better
           I feel it
           Woah
           [Chorus: Ty Dolla $ign & Rare Earth]
           When no one ain't around (I feel it's fadin')
           I think I think too much (I feel it's fadin')
           Ain't nobody watchin' (I feel it's fadin')
           I just fade away (I feel it's fadin')
           
           [Verse 2: Post Malone & Rare Earth]
           You don't even know, I've been so far gone (I feel it)
           I've been so led on, I've been runnin' 'round (I feel it)
           I've been on my shit, whole world on my dick (I feel it)
           I just need to know (I can feel it)
           
           [Bridge: Ms. Barbara Tucker, Rare Earth & Post Malone]
           Oh, deep inside
           Deep, deep, down inside
           I feel it
           Yes, deep inside
           Deep, deep, down inside
           I feel it
           Oh, deep inside
           Deep, deep, down inside
           I feel it
           Yes, deep inside
           I get lifted, yes
           Deep, deep, down inside
           I can feel it
           Oh, deep inside
           Oh, I get lifted, yes
           Deep, deep, down inside
           I feel it
           Yes, deep inside
           Oh, I get lifted, yes
           Deep, deep, down inside
           I feel it
           Oh, deep inside (Oh no, oh no, no, no, no)
           Oh, I get lifted, yes
           Deep, deep, down inside
           I feel it
           Yes, deep inside
           Oh, I get lifted, yes
           Deep, deep, down inside
           I get
           I feel it's fadin'
           Oh, I get lifted, yes
           [Outro: Rare Earth]
           I feel it fadin'
           I feel it fadin'
           I feel it
           I feel it's fadin'`,
           albumThumbnail: "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Fbd9677410e5e5f07d5ff2f8520f70dc3.1000x1000x1.jpg"
        }]
    },
    {
        firstName: "Sarah",
        lastName: "Connor",
        userName: "TerminatorsAreReal",
        email: "connorsarah@gmail.com",
        blurbs: [{
            _id: mongoose.Types.ObjectId(),
            vibe: "zen",
            body: "I know what I know, I'm not going crazy. They came for me and they will be back",
            chosenSongArtist: "Fade by Kanye West",
            thumbnail: "https://via.placeholder.com/150",
            time: new Date(new Date().toISOString())
        }],
        songCollection: [{
          songId: "146987",
          songArtistAlbum: "Dream On - Aerosmith",
          lyrics: `[Verse 1]
          Every time​ that I look in the mirror
          All these lines on my face getting clearer
          The past is gone
          It went by like dusk to dawn
          Isn't that the way?
          Everybody's got their dues in life to pay, yeah
          
          [Interlude]
          I know nobody knows
          Where it comes and where it goes
          I know it's everybody's sin
          You got to lose to know how to win
          
          [Verse 2]
          Half my life's in books' written pages
          Lived and learned from fools and from sages
          You know it's true
          All the things come back to you
          
          [Chorus]
          Sing with me, sing for the year
          Sing for the laughter and sing for the tear
          Sing with me, it's just for today
          Maybe tomorrow the good Lord will take you away
          [Instrumental Break]

          [Chorus]
          Sing with me, sing for the year
          Sing for the laughter and sing for the tear
          Sing with me, it's just for today
          Maybe tomorrow the good Lord will take you away

          [Bridge]
          Dream on, dream on, dream on
          Dream until your dreams come true
          Dream on, dream on, dream on
          Dream until your dreams come true
          Dream on, dream on
          Dream on, dream on
          Dream on, dream on
          Dream on
          Aaaaaah!

          [Chorus]
          Sing with me, sing for the year
          Sing for the laughter and sing for the tear
          Sing with me, it's just for today
          Maybe tomorrow the good Lord will take you away

          [Chorus]
          Sing with me, sing for the year
          Sing for the laughter and sing for the tear
          Sing with me, it's just for today
          Maybe tomorrow the good Lord will take you away`,
          albumThumbnail: "https://t2.genius.com/unsafe/330x0/https%3A%2F%2Fimages.rapgenius.com%2F7e289352949efd6144c35a5cfa690fce.350x355x1.jpg"
     
        }]
    }  
];

const GlobalPostSeed = [
  {
    _id: mongoose.Types.ObjectId(),
    userName: "TerminatorsAreReal",
    vibe: "zen",
    body: "I know what I know, I'm not going crazy. They came for me and they will be back",
    chosenSongArtist: "Fade by Kanye West",
    thumbnail: "https://via.placeholder.com/150",
    time: new Date(new Date().toISOString())
  },
  {
    _id: mongoose.Types.ObjectId(),
    userName: "hastaLaVista",
    vibe: "determined",
    body: "We need to organize",
    chosenSongArtist: "Fade by Kanye West",
    thumbnail: "https://via.placeholder.com/150",
    time: new Date(new Date().toISOString())
  },

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

  db.GlobalPost.deleteMany({})
  .then(() => db.GlobalPost.collection.insertMany(GlobalPostSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });