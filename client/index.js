
const socket = io('localhost:53002')
socket.on('connect', () => {
})

function drop() {
  socket.emit('drop')
}

function showInfo() {
  socket.emit('show')
}

function registerName() {
  const userName = document.getElementById('userName').value
  socket.emit('hello', {
    name: userName
  })
}

function createDrop() {
  const element = '<div class="drop"><img src="./images/rabbit.png"></div>'
}