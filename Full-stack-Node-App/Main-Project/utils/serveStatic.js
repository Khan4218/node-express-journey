import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContent.js'


export async function serveStatic(req,res, publicDir) {

  const pathToResource = path.join(publicDir, req.url === "/"? "index.html" : req.url)

  const ext = path.extname(pathToResource)

  const contentType = getContentType(ext)
  try {
    const content = await fs.readFile(pathToResource)

    sendResponse(res, 200, contentType, content)

  } catch (err) {
    if(err.code === "ENOENT") {
    try{
      const notFoundPage = fs.readFile(publicDir, "404.html")
      sendResponse(res, 404, "text/html", notFoundPage)
    }catch{
     sendResponse(res, 404, 'text/html', '<h1>404 Not Found</h1>')
    }
    }else{
      const errorHtml = `<html><h1>Server Error: ${err.code}</h1></html>`
      sendResponse(res,505,'text/html',errorHtml)
      
    }
  }

}

