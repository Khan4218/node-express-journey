import path from "node:path"
import fs from "node:fs/promises"
import { sendResponse } from "./sendResponse.js"
export const serveStatic = async (baseDir, res) => {
    try {
        const pathToResource = path.join(baseDir,"../public/index.html")
        const content = await fs.readFile(pathToResource)
        sendResponse(res, 200,'text/html', content)
    } catch (error) {
        console.log(error);
        
    }
}