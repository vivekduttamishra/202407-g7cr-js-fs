
const socketIo = require('socket.io');

const setup = (httpServer) => {

  const io = socketIo(httpServer, {
    cors: {
      origin: '*', // Your Angular app's URL
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected');

    // Join a room for the specific book
    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`Client joined room: ${roomId}`);
    });

    // Broadcast a message to all clients in the same room
    socket.on('clientMessage', (roomId, message) => {
      
      console.log('sending message to ',roomId, message);
      io.to(roomId).emit('serverMessage', message);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}


module.exports = setup;
