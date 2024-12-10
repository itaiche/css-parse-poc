const { evaluateProperty } = require('./puppetterCode');

function getQueryParams(url) {
    const query = url.split('?')[1];
    if(query) {
      let res = {};
      query
      .split('#')[0]
      .split('&')
      .forEach(queryParam => {  
        const [key, value] = queryParam.split('=');
        if(key && value) {
            res[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim());
        }
      });
      return res;
    }
    return null;
  } 


function parseCSS(query, response) {
  const { key, value } = getQueryParams(query);
  if(key && value) {
    evaluateProperty(key, value)
    .then(res => {
      console.log('Got response from page for url', query);
      console.log(res);
      response.writeHead(200, { 
        headers: { 'content-type': 'application/json; charset=utf-8'}
      });
      response.end(JSON.stringify(res));
    }).catch(e => {
      console.error('Failed response from page', query, e);
      errorResponse(response,  {
        responseCode: 500,
        data: `query: ${JSON.stringify(query)} failed. Error: ${e.message}`
      });
    });
  }
}

module.exports = {
    parseCSS
};