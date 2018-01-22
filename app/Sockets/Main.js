const io = require('../../start/socket')

io.on('connection', function (socket) {
  console.log('new client connection created')
  socket.emit('sock')
  socket.on('handled', () => {
    console.log('handled')
  })
})
