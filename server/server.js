const http = require('http')
const server = require('socket.io')
const httpServer = http.createServer();
const io = new server.Server(httpServer, {
  cors: {
    origin: "*",
    allowedHeaders: true
  }
});

io.on('connection', (socket) => {
  console.log(socket.id)
})

httpServer.listen(53002, () => {
  console.log('Listening on PORT 53002...');
})



