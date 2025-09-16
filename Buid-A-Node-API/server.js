/* server setup
import http from 'node:http'

const PORT = 8000

const server = http.createServer((req , res) => {
    console.log(req.method);
    
  if(req.url === "/api" && req.method === "GET" ) {
   res.end("Hello from my server and it is a GET request")
  }else{
    res.end(`it is a ${req.method} request`);
    
  }
  
})

server.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
    
})
*/

/* serve stringified JSON */
import http from 'node:http'
import { getDataFromDB } from './database/db.js'
 
const PORT = 3000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

/*
Challenge:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/

  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(destinations))
  }else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
  }
  
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
