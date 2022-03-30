const { express } = require('express')
const app = express()
const host = 'localhost'
const port = 53002

const http = require('http').Server(app)

const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
})