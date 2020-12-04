import io from 'socket.io-client';

// connects only to local
const socket = io.connect(process.env.PORT || "http://localhost:3000");


export default socket;