const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
// might need our database here
const db = require("./models");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// this defines our api routes
app.use("/api", apiRoutes);

// start socket io stuff
// define middleware first before passing in app to http server
var http = require("http").createServer(app);
var io = require("socket.io")(http);

// Send every other request to the React app
// Define any API routes before this runs
// ! this means that these are all the HTML/view routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// could maybe define a whole bunch of functions and event listeners here
// use require, and define the event listeners elsewhere i think
// could query our mongo db from here!!!!!!! and return data!
io.on("connection", (socket) => {
  console.log('----------------------a user connected!');
  // more listeners here
  socket.on("new blurb post", (msg) => {
    console.log("i heard that you posted something! from the server (l:39)");
    console.log(msg, "<----message from the front end");
    db.GlobalPost.find({}).sort({"time": -1})
          .then((data) => {
            console.log("found all public posts");
            // emit back to users!
            io.emit("updating posts", data );
          });
  });
  socket.on('disconnect', () => {
    console.log("user disconnected :(");
  })
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/viBee", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// instead we are making the http listen,
// since we created the server by passing in the app express instance
http.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
