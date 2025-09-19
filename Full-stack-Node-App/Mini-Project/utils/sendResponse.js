export const sendResponse = (res, statusCode = 200, contentType, content) => {
  res.statusCode = statusCode
  res.setHeader('Content-Type', contentType)
  res.end(content)
}