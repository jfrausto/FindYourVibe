import axios from "axios";

// calls to Genius API, Wordnik API, and user database(eventually)
export default {
    // getSongsPool takes in an array of strings
    getSongsPool: function(lyricSnippet) {
        return axios.get("/api/songs/" + lyricSnippet);
    },
    getAllUsers: function() {
        return axios.get("/api/users");
    },
    // getNouns takes in a string
    getNouns: function(words) {
        return axios.get("/api/nouns/" + words);
    },
    postBlurb: function(blurb) {
        return axios.post("/api/postBlurb", blurb);
    },
    getUserPosts: function(email) {
        return axios.get("/api/blurbs/" + email);
    }
}