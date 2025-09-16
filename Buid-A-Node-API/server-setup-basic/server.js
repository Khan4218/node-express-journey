// server setup
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
