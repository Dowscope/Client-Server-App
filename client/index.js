
const socket = io('localhost:53002')
socket.on('connect', () => {
})

socket.emit('hello', {
  ID: socket.id,
  name: 'Client'
})