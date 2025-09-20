import path from "node:path"
import fs from "node:fs/promises"
import { sendResponse } from "./sendResponse.js"
import { getContentType } from "./getContentType.js"
export const serveStatic = async (req, publicDir, res) => {
    try {
        const pathToResource = path.join(publicDir, req.url === "/"? "index.html" : req.url )
        const content = await fs.readFile(pathToResource)
        const ext = path.extname(pathToResource)
        const contentType = getContentType(ext)
        sendResponse(res, 200, contentType, content)
    } catch (error) {
        if(error.code === "ENOENT") {
    try{
      const notFoundPage = await fs.readFile(path.join(publicDir, "404.html"))
      sendResponse(res, 404, "text/html", notFoundPage)
    }catch{
     sendResponse(res, 404, 'text/html', '<h1>404 Not Found</h1>')
    }
    }else{
      const errorHtml = `<html><h1>Server Error: ${error.code}</h1></html>`
      sendResponse(res,505,'text/html',errorHtml)
      
    }
        
    }
}


