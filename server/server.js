const http = require('http')
const server = require('socket.io');
const httpServer = http.createServer();
const io = new server.Server(httpServer, {
  cors: {
    origin: "*",
    allowedHeaders: true
  }
});

io.on('connection', (socket) => {
  console.log('Connection by: ' + socket.handshake.address)
  socket.on('hello', (arg) => {
    console.log('User ' + arg.name + ' has been added.')
    socket.data = arg
  })
  socket.on('show', () => {
    cleanup()
  })
  socket.on('drop', () => {
    drop()
  })
})



httpServer.listen(53002, () => {
  console.log('Listening on PORT 53002...');
})

async function cleanup() {
  const sockets = await io.fetchSockets()
  for (const socket in sockets) {
    console.log('1 ' + sockets[socket].data.name)
  }
}

function drop() {
  
}