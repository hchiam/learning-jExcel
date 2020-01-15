const express = require('express');
const app = express();

// be able to use files:
app.use('/', express.static(__dirname + ''));

// serve index.html at localhost:3000/
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/overview-demo.html');
});

// make this app actually listen for requests:
const listener = app.listen(process.env.PORT | 8000, () => { // | 3000 in case testing locally
  console.log('Your app is listening on port ' + listener.address().port);
});
