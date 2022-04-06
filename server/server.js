const http = require('http')
const server = require('socket.io');
const httpServer = http.createServer();
const io = new server.Server(httpServer, {
  cors: {
    origin: "*",
    allowedHeaders: true
  }
});



var connectedUsers = []

io.on('connection', (socket) => {
  console.log('Connection by: ' + socket.address)
  socket.on('hello', (arg) => {
    connectedUsers.forEach( u => {
      if (u.ID == arg.ID){
        delete u
      }
    })
    connectedUsers.push(arg)
    console.log('User ' + arg.name + ' has been added.')
  })
  console.log(connectedUsers)
})


httpServer.listen(53002, () => {
  console.log('Listening on PORT 53002...');
})



