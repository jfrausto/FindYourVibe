import axios from "axios";

// UTILIZING GENIUS AND WORDNIK API
export default {
    getSongs: function() {
        return axios.get("/api/songs");
    },
    getAllUsers: function() {
        return axios.get("/api/users");
    },
    getNouns: function(words) {
        return axios.get("/api/nouns/" + words);
    }
}