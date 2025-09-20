import path from "node:path";
import fs from "node:fs/promises"
import { getData } from "./getData.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const sightings = await getData()

export async function addNewSighting(newSighting) {
  try {
    sightings.push(newSighting)
    const pathToJson = path.join(__dirname, "../data", "data.json")
    await fs.writeFile(pathToJson, JSON.stringify(sightings, null, 2), "utf8")
    
    
  } catch (err) {
    throw new Error(err)
  }
}