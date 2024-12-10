# Parse CSS Value
This POC tries to show how you can break down CSS values using the browser abilities (where it supports it).  

It has an [index.html](/statics/index.html) which includes a very simple function: `parseCSSValue`.

You can use it to break down some short hand CSS types like: `font`, `padding`, `margin`, `border`. 

This project also has a [super small server](index.js) that uses [`puppeteer`](/src/puppetterCode.js) to allow running the same API in a server. 

The API will launch on `http://localhost:3000/parse-css?key=padding&value=1px`.

Use `npm run dev` to start the server. 
The only dependency is Pupetter for the server. 





