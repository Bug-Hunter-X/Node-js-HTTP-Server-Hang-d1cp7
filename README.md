# Node.js HTTP Server Hang
This repository demonstrates a subtle bug in a Node.js HTTP server where omitting `res.writeHead()` can lead to the server hanging.

## Bug Description
The provided `bug.js` file contains a minimal HTTP server.  If you run this code, you'll observe that the server will not respond correctly.  The issue is the missing `res.writeHead()` call before `res.end()`.  While `res.end()` might seem sufficient, it requires a status code and headers to be properly sent.  Without them, the response hangs indefinitely.

## Solution
The `bugSolution.js` file shows the correct implementation with `res.writeHead()`, ensuring the server functions as expected.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` and try to access `http://localhost:3000`.  You'll see the server hang.
3. Run `node bugSolution.js` and access `http://localhost:3000`. You'll receive the "Hello World!" response.

This example highlights the importance of properly using `res.writeHead()` in Node.js HTTP servers.