import http from 'node:http'
import path from 'node:path'
// import { testPath } from '../utils/testPath.js'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'

const PORT = 2000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async(req, res)=> {
//   const absPathToResource = path.join(__dirname, "node-express-journey", "Full-stack-Node-App","Mini-Project" , "public", 'index.html')
//   const relPathToResource = path.join("node-express-journey", "Full-stack-Node-App","Mini-Project" , "public", 'index.html')
//   console.log(absPathToResource);
//   console.log(relPathToResource);
//   testPath(__dirname)
  const pathToResource = path.join(__dirname,"../public/index.html")
  const content = await fs.readFile(pathToResource)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(content)
})

server.listen(PORT, () => console.log(`connected on port: ${PORT}`))