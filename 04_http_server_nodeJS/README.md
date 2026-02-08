# Node.js HTTP Server Example Notes

This README explains the code and behavior in [index.js](04_http_server_nodeJS/index.js), which demonstrates a basic HTTP server in Node.js.

## Key Concepts

- **HTTP Server Creation**
  - Uses `http.createServer()` to create a server.
  - Handles incoming requests with a callback function.

- **Request Handling**
  - Each time a request is received, a counter (`i`) is incremented.
  - Logs the number of requests to the console.
  - Appends a log entry with the timestamp to `log.txt`.
  - Responds to the client with "hi from the server".

- **Server Listening**
  - The server listens on port 8000.
  - Logs a message when the server starts.

## Why Request Count May Double

- Browsers often send extra requests for resources like `favicon.ico`.
- Each request (including for favicon) triggers the server handler, incrementing the count.
- To avoid this, check `req.url` and only increment for specific routes (e.g., `/`).

## Example Code

```js
const http = require("http");
const fs = require("fs");
let i = 0;
const myServer = http.createServer((req, res) => {
    i++;
    console.log("new req recevied " + i + " time");
    const log = `new request received on --> ${new Date().toLocaleString()}\n`;
    fs.appendFile("log.txt", log, () => {
        res.end("hi from the server");
    });
});

myServer.listen(8000, () => {
    console.log("server started on port 8000");
});
```

## Summary Table

| Feature         | Description                                      |
|-----------------|--------------------------------------------------|
| Request Counter | Tracks number of requests received               |
| Logging         | Appends timestamped log to log.txt               |
| Response        | Sends "hi from the server" to each client        |
| Port            | Server listens on port 8000                      |

---

For more details, see the code and comments in [index.js](04_http_server_nodeJS/index.js).
