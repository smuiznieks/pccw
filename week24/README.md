# Week 24

1. `npm install` just in case! and `npm i jsonwebtoken`
2. In server.js:
`import jwt from 'jsonwebtoken';`
`const accessTokenSecret = 'somerandomaccesstoken';`
```
// Copying this function from the starter files
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(`Headers: ${JSON.stringify(req.headers)}`);
  console.log(`Body: ${JSON.stringify(req.body)}`);
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}
```
3. Test endpoint in Postman
4. Add to middleware: `app.use(selgaMiddleware, authenticateJWT);`
5. Restart server, test endpoint again
6. Login by posting to the login endpoint: `http://localhost:4000/login` with the following body:
```
{
  "username": "john",
  "password": "password123admin"
}
```
7. Test endpoint again
8. Add logic to check authorization for deleting:
```
// DELETE
app.delete('/delete/:id', (req, res) => {
  const { role } = req.user;

  if (role != 'admin') {
    return res.sendStatus(403);
  }

  // ... more code

});
```
9. Login by posting to the login endpoint: `http://localhost:4000/login` with the following body:
```
{
  "username": "anna",
  "password": "password123member"
}
```
10. Attempt to delete an entry - forbidden
11. Re-attempt with admin user - success
