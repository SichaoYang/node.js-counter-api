# Node.js Counter API
This is a counter on the server side.

## Host a Server
1. Install node.js on the server
2. run `node counter.js`

## Access the Counter
Send a http request to the port the server is listening to (default port: `12345`) to get the current value of the counter.
Parameter `cmd` in the request specifies additional behaviors of the counter.
- `cmd=reset` resets the counter to 0
- `cmd=increase` increases the counter by 1
- `cmd=decrease` decreases the counter by 1

## A Local Example using Browser
1. Host a server on http://localhost:12345/. The console will print `Listening to port 12345...`
2. Open `http://localhost:12345/`. The browser window will display `0`.
3. Open `http://localhost:12345/?cmd=increase`. The browser window will display `1`.
4. Open `http://localhost:12345/?cmd=increase`. The browser window will display `2`.
5. Open `http://localhost:12345/?cmd=decrease`. The browser window will display `1`.
6. Open `http://localhost:12345/?cmd=reset`. The browser window will display `0`.

## A JSONP Example
1. Host a server on url:port/.
2. Send command to and get counter back from the server with JQuery.
```
$.get("url:port/?cmd=reset", function(data){
    console.log(data)
})
```

