import io from 'socket.io-client';

// ! connects to home(root) route on whatever server it's on dynamically
const socket = io();

export default socket;