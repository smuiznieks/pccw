const express = require('express');
const app = express();

// Port must be unique!
const port = 3001;

app.get('/test', (request, response) => {
  response.json({'message': 'Hello World!'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
