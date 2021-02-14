const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;

// Serve a static front end
app.use(express.static('src'));

// List available configurations for the front end
app.get('/configurations', (request, response) => {
  let output = [];
  fs.readdir('./configurations', {withFileTypes: true}, (error, entries) => {
    for (i = 0; i < entries.length; i++) {
      if (entries[i].isDirectory()) output.push(entries[i].name);
    }
    response.json(output);
  });
});

app.get('/configuration/*', (request, response) => {
  
});

app.listen(port, () => {
  console.log(`Lower thirds running on ${port}`);
});
