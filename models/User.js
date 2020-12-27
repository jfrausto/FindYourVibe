const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the user
// full name, username, email, 
const UserSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    userName: { type: String, required: true},
    email: { type: String, required: true},
    blurbs: [{
        vibe: String,
        body: String,
        chosenSongArtist: String,
        thumbnail: String,
        time: { type: Date, default: Date.now}
    }],
    songCollection: [{
        songId: String,
        songArtistAlbum: String,
        lyrics: String,
        albumThumbnail: String
    }]
}
// ? could add more options here in the future
);
// ? could define some getter virtuals to compute things for us if needed

// save the model
const User = mongoose.model("User", UserSchema);

// export it
module.exports = User;