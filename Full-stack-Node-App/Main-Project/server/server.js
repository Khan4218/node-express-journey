import http from 'node:http'
import path from 'node:path'
import { serveStatic } from '../utils/serveStatic.js'
import { fileURLToPath } from 'node:url'

const PORT = 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname);

const server = http.createServer(async (req, res) => {
  const rootDir = path.join(__dirname, '../public')
  console.log(rootDir);
  
    await serveStatic(req, res, rootDir)
}) 

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))