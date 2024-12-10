const { launchPuppeteer } = require('./src/puppetterCode');
const { createServerProcess } = require('./src/server');
const { join } = require('path'); 
const { existsSync } = require('node:fs'); 

const indexHTML = join(process.cwd(), `statics/index.html`);

if(!existsSync(indexHTML)){
  console.error('File not found', indexHTML);
  throw('Cant find the file');
}

launchPuppeteer(indexHTML)
.then(createServerProcess)
.catch(e => {
  console.error('Failed to launch server');
  console.error(e);
  process.exit(1);
});

