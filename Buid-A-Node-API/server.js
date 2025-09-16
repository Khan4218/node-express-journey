/* serve stringified JSON */
import http from 'node:http'
import { getDataFromDB } from './database/db.js'
 import {sendJson }from './utils/sendJson.js'
const PORT = 3000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()
  if (req.url === '/api' && req.method === 'GET') {
   sendJson(res, destinations)
  }else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const parts = req.url.split('/')    
    const continentName = parts[parts.length - 1]
    const filtered = destinations.filter(item => item.continent.toLowerCase() === continentName.toLowerCase())
    sendJson(res, filtered)
    }else {
    sendJson(res, { error: "not found", message: "The requested route does not exist" }, 404)
    } 
  
})
server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
