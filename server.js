require('dotenv');
const express = require('express');
const app = express();
import React from 'react';
import {renderToString} from 'react-dom/server'
import App from './src/App';

app.use(express.static('assets/dist'));

app.get('/', (req,res) => {
  let reactDom = renderToString(<App />);
  //const helmet = Helmet.renderStatic();
  //insert with into ReactDOM string with Mongoose;
   const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head></head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/style.css">
    <title>Rob Bertram Front End Developer</title>
  </head>
  <body>
    <div id="app">
    ${reactDom}
    </div>
    <script src="bundle.js"></script>
  </body>
  </html>`
  return res.send(html);
});

// eslint-disable-next-line no-console
app.listen(8080, () => console.log('Server on.'));