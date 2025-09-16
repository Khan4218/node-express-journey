import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import {filterData } from './utils/filterData.js'
import { sendJson } from './utils/sendJson.js'

const PORT = 3000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    sendJson(res, destinations)

  } else if (req.url.startsWith('/api/') && req.method === 'GET') {
    const parts = req.url.split('/')    // ["", "api", "continent", "Europe"]
    const property = parts[2]           // "continent" or "country"
    const value = parts[3]              // "Europe" or "India"

    if (property && value) {
      const filteredData = filterData(destinations, property, value)
      sendJson(res, filteredData)
    } else {
      sendJson(res, { error: "bad request", message: "Invalid URL format" }, 400)
    }

  } else {
    sendJson(res, { error: "not found", message: "The requested route does not exist" }, 404)
  }
})

server.listen(PORT, () => console.log(`Server connected on port: ${PORT}`))