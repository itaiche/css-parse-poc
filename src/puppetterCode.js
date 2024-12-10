const puppeteer = require('puppeteer');

let page;
async function launchPuppeteer(indexHTML) {
    // Launch the browser and open a new blank page
    const puppeteerFilePath = `file://${indexHTML}`;
    console.log('HTML location', indexHTML, puppeteerFilePath);
    const browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(puppeteerFilePath);
  };
  
function evaluateProperty(key, value) {
      const stateMentToEvaluate = `parseCSSValue('${key}', '${value}')`;
      console.log('Passing to evaluate: ', stateMentToEvaluate);
      return page.evaluate(stateMentToEvaluate);
 }

  module.exports = {
    launchPuppeteer,
    evaluateProperty
  };