const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
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

// start socket.io connection
io.on("connection", (socket) => {
  // listen for new blurb posts, and handle it
  // if there was a new post, get all posts again and display them
  socket.on("new blurb post", (msg) => {
    db.GlobalPost.find({}).sort({"time": -1})
          .then((data) => {
            // emit back to users!
            io.emit("updating posts", data );
          });
  });
  // leave a message on the server when a socket disconnects
  socket.on('disconnect', () => {
    console.log("a user disconnected!");
  })
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/viBee", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// http will listen,
// since we created the server by passing in the app express() instance
http.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
