import { sendResponse } from "../utils/sendResponse.js"
export async function handlePost(req, res) {
    if(req.url === "/sub" && req.method === "POST") {
     let body = ""
     for await (const chunk of req){
        body += chunk
     }
     try{
        const emailObj = JSON.parse(body)
        const strEmailObj = JSON.stringify(emailObj)
        sendResponse(res, 201, "application/json", strEmailObj )

     }catch(err){
      console.log('Invalid JSON, ', err)
     }
     return true
    }
    return false
}