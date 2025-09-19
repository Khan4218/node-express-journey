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
        console.log(error);
        
    }
}