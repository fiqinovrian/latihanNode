/* Membuat server dengan module http */
// const http = require('http');
// const server = http.createServer(function (request, response){
//     response.end('Hi, welcome at NodeJS');
// }).listen(8000);
// console.log("Server running on http://localhost: 8000");

/*memodifikasi response body dan header */
const http = require('http');
const server = http.createServer(function (request, response){
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write("Hello World");
    response.end();
}).listen(8000);
console.log("Server running on http://localhost: 8000");