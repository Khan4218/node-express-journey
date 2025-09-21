import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJsonBody } from "../utils/parseJsonBody.js";
import { sendResponse } from "../utils/sendResponse.js";
import { sightingEventEmitter } from "../events/sightingEvents.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";

export async function handleGet(res) {
  const data = await getData()
  const strData = JSON.stringify(data)
  sendResponse(res, 200, "application/json", strData)
}

export async function handlePost(req, res) {
    try{
        const parsedBody =  await parseJsonBody(req)
        const sanitizeBody = sanitizeInput(parsedBody)
         await addNewSighting(sanitizeBody)
         sightingEventEmitter.emit("sighting-added",sanitizeBody )
        sendResponse(res,201, "application/json",JSON.stringify(sanitizeBody))

    }catch(err) {
      sendResponse(res, 400, "application/json", JSON.stringify({error:err}))
    }
}