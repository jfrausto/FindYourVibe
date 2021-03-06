import axios from "axios";

// calls to Genius API, Wordnik API, and user database(eventually)
export default {
    // getSongsPool takes in an array of strings
    getSongsPool: function(lyricSnippet, queryType) {
        return axios.get("/api/songs/" + lyricSnippet + "/" + queryType);
    },
    getAllUsers: function() {
        return axios.get("/api/users");
    },
    getCurrentUser: function(email) {
        return axios.get("/api/users/" + email)
    },
    // getNouns takes in a string
    getNouns: function(words) {
        return axios.get("/api/nouns/" + words);
    },
    postNewUser: function(user) {
        return axios.post("/api/newUser", user);
    },
    postBlurb: function(blurb) {
        return axios.post("/api/postBlurb", blurb);
    },
    postGlobalBlurb: function(blurb) {
        return axios.post("/api/postGlobal", blurb);
    },
    getAllGlobalPosts: function() {
        return axios.get("/api/globalPosts");
    },
    getUserPosts: function(email) {
        return axios.get("/api/blurbs/" + email);
    },
    getLyrics: function(cardID) {
        return axios.get("/api/lyrics/" + cardID);
    }
};
