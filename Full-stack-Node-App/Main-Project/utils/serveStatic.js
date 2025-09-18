import path from "node:path";

export const serveStatic = (baseDir) => {
  const filePath = path.join(baseDir, "Full-stack-Node-App","Main-Project","public","index.html ")
  console.log(filePath);
  
}

