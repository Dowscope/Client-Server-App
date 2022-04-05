
const socket = io('http://localhost:53002')
socket.on('init', handleInit)

// const socket = io("ws://localhost:3000");

// // send a message to the server
// socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

// // receive a message from the server
// socket.on("hello from server", (...args) => {
//   // ...
// });

console.log('Client')

function handleInit(msg) {
  console.log(msg)
}