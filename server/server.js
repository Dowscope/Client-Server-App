const io = require('socket.io')()

io.on('Connection', (client) => {
  client.emit('init', { data: 'Hellow From Server' })
})

io.listen(53002)