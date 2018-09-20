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
    // Cross-Domain-Access with JSONP
    resstr = "{counter:" + counter.toString() + "}";  // only json can be returned
    if (query && query.callback) response.end(query.callback + '(' + resstr + ')');  // cross-domain
    else response.end(resstr);                                                       // plain
}).listen(port);

console.log('Listening to port ' + port.toString() + '...');
