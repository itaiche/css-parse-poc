const { spawn } = require('node:child_process');
const { createServer } = require('http');
const { parseCSS } = require('./parse-css-route');

const PORT = 3000;
const path = 'parse-css';

function createServerProcess(){
  const server = createServer((req, response) => {
    try {
        const pathName = req.url.split('/')[1];
        if(pathName.indexOf(path) === 0) { 
            parseCSS(pathName, response);
        } else {
          errorResponse(response, { responseCode: 400,
            data: `Invalid request: ${req.url}`
          });
        }
    } catch(e) {
        console.error(`Attempt failed`);
        console.error(e);
        errorResponse(response, {
          responseCode: 500, 
          data: `Error by request ${req.url}`
        })
    } 
  });
  const serverURL = `http://localhost:${PORT}`;
  server.listen(PORT);
  spawn('open', [`${serverURL}/${path}?key=padding&value=1px`]);
}

function errorResponse(response, error){
    response.writeHead(error.responseCode);
    response.end(error.data);
}
  
module.exports = {
    errorResponse,
    createServerProcess
};
