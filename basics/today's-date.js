/* Today's Date
Given an app.js file, write an API with path / using express JS that sends today's date as a response in DD-MM-YYYY format.

Export the express instance using default export syntax.

Use Common JS module syntax */


const express = require('express');

const app = express();

app.get('/', (request, response) => {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  response.send(`${day}-${month}-${year}`);
});

module.exports = app;
