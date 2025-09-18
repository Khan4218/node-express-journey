import http from 'node:http'
import path from 'node:path'
import { testPath } from '../utils/testPath.js'
const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res)=> {
  const absPathToResource = path.join(__dirname, "node-express-journey", "Full-stack-Node-App","Mini-Project" , "public", 'index.html')
  const relPathToResource = path.join("node-express-journey", "Full-stack-Node-App","Mini-Project" , "public", 'index.html')
  console.log(absPathToResource);
  console.log(relPathToResource);
  testPath(__dirname)
  res.setHeader('Content-Type', 'text/html')
  res.end()
})

server.listen(PORT, () => console.log('connected on port 8000'))