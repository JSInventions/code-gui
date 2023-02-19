const http = require('http');
const fs = require('fs');
const contentType = 'text/html';
const hostname = 'localhost';
const port = 3000;
const title = "Code GUI";
const nodemon_icon = "<svg version='1.1' id='template' xmlns='https://www.w3.org/2000/svg' xmlns:xlink='https://www.w3.org/1999/xlink' x='0px' y='0px' width='160' height='180' viewBox='0 0 160 185' xml:space='preserve'><path d='M158.156,60.461l-5.326-3.066 c8.189-12.08,13.084-30.242,6.947-57.395c0,0-13.82,38.733-41.602,37.449L85.645,18.73c-1.227-0.728-2.602-1.103-3.992-1.159 c-0.125,0-0.648,0-0.75,0c-1.387,0.057-2.76,0.432-4.004,1.159L44.367,37.449C16.586,38.738,2.762,0,2.762,0 c-6.141,27.152-1.238,45.314,6.949,57.395l-5.324,3.066C1.682,62.018,0,64.914,0,68.072l0.16,112.363 c0,1.568,0.812,3.021,2.188,3.783c1.344,0.812,3.008,0.812,4.35,0l43.094-24.676c2.727-1.619,4.385-4.477,4.385-7.6V99.449 c0-3.129,1.658-6.031,4.373-7.582l18.35-10.568c1.367-0.795,2.863-1.182,4.391-1.182c1.492,0,3.027,0.387,4.356,1.182 l18.344,10.568c2.715,1.551,4.379,4.453,4.379,7.582v52.494c0,3.123,1.68,6.002,4.391,7.6l43.082,24.676 c1.352,0.812,3.039,0.812,4.379,0c1.336-0.762,2.176-2.215,2.176-3.783l0.141-112.363 C162.535,64.914,160.879,62.018,158.156,60.461z'></path></svg>";
const contents = nodemon_icon+"<div>Code</div><textarea title='null'>console.log('hello world!')</textarea>";
const doc = "<!DOCTYPE html><html lang='en'><head><title>"+title+"</title></head><body>"+contents+"</body></html>";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);
  res.end(doc);
});

function fact(){
}
server.listen(port, hostname, () => {
  console.clear();
  console.log(`Server running at http://${hostname}:${port}/`);
});