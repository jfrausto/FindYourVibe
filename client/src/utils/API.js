import axios from "axios";

export default {
    getSongs: function() {
        return axios.get("/api/songs");
    }
}