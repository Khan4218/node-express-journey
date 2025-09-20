import http from 'node:http'
import path from 'node:path'
import { serveStatic } from '../utils/serveStatic.js'
import { fileURLToPath } from 'node:url'
import { getData } from '../utils/getData.js'
import { handleRoutes } from '../handlers/handleRoutes.js'

const PORT = 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '../public')


const server = http.createServer(async (req, res) => {
  if(req.url === "/api" && req.method === "GET") {
   await handleRoutes(res)
  }else{
    return await serveStatic(req, res, rootDir)
  }
  
   
}) 

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))