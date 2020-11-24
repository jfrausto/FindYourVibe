const db = require("../models");

// define some methods for the User Controller
// this schema holds a lot of information
// we should expect this one to have a lot

module.exports = {
    // simple find all users method
    findAll: function(req, res) {
        db.User.find( {} ).then( (data) => res.json(data)).catch( (err) => res.status(422).json(err));
    }
};