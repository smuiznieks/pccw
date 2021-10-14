// console.log('Hello World!');
// console.log(process);
// console.log(process.argv);
const express = require('express');
// console.log(express);
const app = express();

// Port must be unique!
const port = 3001;

// app.get('/test', (request, response) => {
//   response.send('Hello World!')
// })

app.get('/test', (request, response) => {
  response.json({'message': 'Hello World!'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
