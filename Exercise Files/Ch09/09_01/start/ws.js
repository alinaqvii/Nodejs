var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function(ws){

    ws.send('Welcome to Cyber Chat');
});


console.log('Socket Server is running on port 3000');