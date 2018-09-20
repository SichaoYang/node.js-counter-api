const http = require('http');
const url = require('url');
const port = 12345
let counter = 0;

http.createServer(function (request, response) {
    const query = url.parse(request.url, true).query;
    switch (query.cmd) {
        case "reset": counter = 0; break;
        case "increase": counter++; break;
        case "decrease": counter--; break;
    }
    response.writeHead(200, {'Access-Control-Allow-Origin':'*'});
    response.end(counter.toString());
}).listen(port);

console.log('Listening to port ' + port.toString() + '...');
