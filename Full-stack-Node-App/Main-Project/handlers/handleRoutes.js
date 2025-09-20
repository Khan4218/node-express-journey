import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
export async function handleGet(res) {
  const data = await getData()
  const strData = JSON.stringify(data)
  sendResponse(res, 200, "application/json", strData)
}

export async function handlePost(req, res) {
 console.log("Post Request received");
 
}