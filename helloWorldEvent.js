const http = require('http');

const host = '127.0.0.1';

const port = 3001;

const server = http.createServer();

server.on('request', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Header-Type', 'Text/html');

    res.end('<h1>Hola Mundo con Eventos</h1>');
});

server.listen(port);

console.log(`Servidor corriendo en ${host}:${port}/`);