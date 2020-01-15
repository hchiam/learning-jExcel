const express = require('express');
const app = express();

// be able to use files:
app.use('/', express.static(__dirname + ''));

// serve overview-demo.html at localhost:3000/
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/overview-demo.html');
});

app.get("/comments", (request, response) => {
  response.sendFile(__dirname + '/other-examples/comments.html');
});

app.get("/formulas", (request, response) => {
  response.sendFile(__dirname + '/other-examples/formulas.html');
});

app.get("/import", (request, response) => {
  response.sendFile(__dirname + '/other-examples/import.html');
});

app.get("/lazy", (request, response) => {
  response.sendFile(__dirname + '/other-examples/lazy.html');
});

app.get("/merge", (request, response) => {
  response.sendFile(__dirname + '/other-examples/merge.html');
});

app.get("/react", (request, response) => {
  response.sendFile(__dirname + '/other-examples/react.html');
});

// make this app actually listen for requests:
const listener = app.listen(process.env.PORT | 8000, () => { // | 3000 in case testing locally
  console.log('Your app is listening on port ' + listener.address().port);
});
