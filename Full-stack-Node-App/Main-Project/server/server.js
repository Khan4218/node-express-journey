import http from "node:http"
import { serveStatic } from "../utils/serveStatic.js"

const PORT = 3000
const __dirname = import.meta.dirname
const server = http.createServer((req, res) => {
serveStatic(__dirname)
  res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Methods': 'GET'})
  res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
    
})