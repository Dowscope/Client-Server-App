
const Socket = io('localhost:53002')
Socket.on('connection', (socket) => {
  document.body.innerHTML(socket.id)
})