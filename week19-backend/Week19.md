# Week 19

1. Node applications = running JavaScript on back end with Node (rather than in the browser)
2. Make sure to create a `.gitignore` file before starting! It will make your life a lot easier in the future.
3. Create file `server.js`
4. Add line: `console.log('Hello World!)'`
5. `node server.js`
6. Update `server.js` to `console.log(process)`
7. Update `server.js` to `console.log(process.argv)`
8. `node server.js HELLO`
9. Syntax for imports change for the back-end, importing packages 
10. `const express = require('express');` 
11. Conversation about naming conventions (the left is the name of the variable)
12. `node server.js`
13. `MODULE_NOT_FOUND` error 
14. `npm install express`
15. Rerun the command for the server (add `console.log(express)` to the server)
16. Update port number (must be unique!)
17. Copy listen section from Express example
```
// Waiting for users to do something
// Two arguments 1. port 2. callback = what it will run when the server is running
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
```
18. It will keep running (listening) until we stop it with CTRL+C
19. Copy get section from Express example
// Set up end points
// Short for request and response (standard)
app.get('/', (req, res) => {
  res.send('Hello World!');
});
20. Update example to return json: http://expressjs.com/en/5x/api.html#res.json 
// Set up end points
// Short for request and response (standard)
app.get('/', (req, res) => {
  res.json({"hello": "world!"});
});
21. Update get endpoint to '/test' and navigate to localhost:3001
22. API Examples: https://dog.ceo/dog-api/
23. Testing APIs with Postman
24. Update Taco App to getDogs() (see Week19 folder)
