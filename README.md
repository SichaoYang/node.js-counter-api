# Node.js Counter API
This is a counter on the server side.

## Host Server
1. Install node.js on the server
2. run `node counter.js`

## Access Counter
Send a http request to the port the server is listening to (default port: `12345`) to get the current value in the counter in a stringified json like `{counter: 0}`. 
Parameter `cmd` in the request specifies additional behaviors of the counter.
- `cmd=reset` resets the counter to 0
- `cmd=increase` increases the counter by 1
- `cmd=decrease` decreases the counter by 1

## Example with Browser
1. Host the server on http://localhost:12345/. The console will print `Listening to port 12345...`
2. Open http://localhost:12345/. The browser window will display `{counter:0}`.
3. Open http://localhost:12345/?cmd=increase. The browser window will display `{counter:1}`.
4. Open http://localhost:12345/?cmd=increase. The browser window will display `{counter:2}`.
5. Open http://localhost:12345/?cmd=decrease. The browser window will display `{counter:1}`.
6. Open http://localhost:12345/?cmd=reset. The browser window will display `{counter:0}`.
