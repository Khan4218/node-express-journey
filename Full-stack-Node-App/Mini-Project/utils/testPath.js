import path from "path";

export function testPath(dir) {
    const relPathToResource = path.join("node-express-journey", "Full-stack-Node-App","Mini-Project" , "public", 'index.html')
    const absPathToResource = path.join(dir,"node-express-journey", "Full-stack-Node-App","Mini-Project" , "public", 'index.html')
    console.log("relativePath:", relPathToResource);
    console.log("absolutePath:", absPathToResource);
}