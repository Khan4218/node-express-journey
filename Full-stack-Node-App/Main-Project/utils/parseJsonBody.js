export async function parseJsonBody(req) {
    let body = ""
    for await (const chunk of req) {
     body+= chunk
    }
    console.log(body);
    
    try{
     const parseBody = JSON.parse(body)
     return parseBody
    }catch(err) {
     throw new Error(`Invalid JSON format ${err}`)
    }
}