import http from 'node:http'
import path from 'node:path'
import { serveStatic } from '../utils/serveStatic.js'
import { fileURLToPath } from 'node:url'

const PORT = 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '../')

const server = http.createServer(async (req, res) => {
    await serveStatic(res, rootDir)
}) 

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))