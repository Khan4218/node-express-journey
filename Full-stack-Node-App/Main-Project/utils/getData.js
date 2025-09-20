import path from "node:path"
import fs from "node:fs/promises"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename) 

export async function getData () {
try{
const pathToData = path.join(__dirname, "..", "data", "data.json")
const data = await fs.readFile(pathToData, "utf8")
const parsedData = JSON.parse(data)
return parsedData
}catch(err) {
console.log(err);
return []

}

}