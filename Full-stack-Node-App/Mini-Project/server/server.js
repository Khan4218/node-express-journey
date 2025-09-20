import http from 'node:http'
import path from 'node:path'
// import { testPath } from '../utils/testPath.js'
import { fileURLToPath } from 'node:url'
// import fs from 'node:fs/promises'
import { serveStatic } from '../utils/serveStatic.js'
import { handlePost } from '../routehandlers/routeHandlers.js'

const PORT = 2000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const server = http.createServer(async(req, res)=> {
  const publicDir = path.join(__dirname, "../public")
  const handled = await handlePost(req, res)
  if (!handled) {
  await serveStatic(req, publicDir, res)
  }
  
})

server.listen(PORT, () => console.log(`connected on port: ${PORT}`))