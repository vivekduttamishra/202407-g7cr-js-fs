const socketIo = require('socket.io');



const setup = (httpServer) => {


    const io = socketIo(httpServer, {
        cors: {
            origin: 'http://localhost:4200', // Your Angular app's URL
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('serverMessage', (message) => {


        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });


        socket.on('joinRoom', (bookId) => {
            socket.join(bookId);
            console.log(`Client joined room: ${bookId}`);
        });


    });
};

module.exports = setup;
