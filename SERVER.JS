const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(__dirname)); // Serve static files (HTML, CSS, JS)

wss.on('connection', (ws) => {
    console.log("New client connected!");

    ws.on('message', (message) => {
        console.log("Received:", message);
        
        // Broadcast message to all clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => console.log("Client disconnected"));
});

server.listen(3000, () => console.log("Server running on http://localhost:3000"));
