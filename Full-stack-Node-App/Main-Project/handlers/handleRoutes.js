import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
export async function handleRoutes(res) {
  const data = await getData()
  const strData = JSON.stringify(data)
  sendResponse(res, 200, "application/json", strData)
}