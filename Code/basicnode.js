//import Node http library
const http = require('http');

//define hostname and port
const hostname = '127.0.0.1';
const port = 8080;

//when server is ready, callback func is called
    //createServer is an event emitter; called once for every HTTP request made to the server
    //input: req, res
    //req is an emitter for requests to server
    //res is an emitter for server response to request
const server = http.createServer((req,res)=>{
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>hello world</h1>')
    res.write('<button>does nothing</button>')
    res.end()
});

//server set to listen on proper port and hostname for requests 
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});