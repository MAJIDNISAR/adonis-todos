
'use strict'

const server = use('http').createServer()
const io = use('socket.io')(server).listen(3333)

module.exports = io
