const http = require('http');
const url = require('url');
const port = 12345
let counter = 0;

http.createServer(function (request, response) {
    switch (url.parse(request.url, true).query.cmd) {
        case "reset": counter = 0; break;
        case "increase": counter++; break;
        case "decrease": counter--; break;
    }

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('{counter:' + counter.toString() + '}');
    response.end();
}).listen(port);

console.log('Listening to port ' + port.toString() + '...');
