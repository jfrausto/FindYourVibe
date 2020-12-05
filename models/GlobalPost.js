const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const GlobalPostSchema = new Schema({
  userName: { type: String, required: true},
  vibe: String,
  body: String,
  chosenSongArtist: String,
  thumbnail: String,
  time: { type: Date, default: Date.now}
}
// ? could add more options here in the future
);
// save the model
const GlobalPost = mongoose.model("GlobalPost", GlobalPostSchema);

// export it
module.exports = GlobalPost;