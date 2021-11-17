# Week 22

Make sure to npm install before starting!

1. Started by copying all of last week's content over to this week's folder
2. Middleware demo - create a function with parameters req, res and next:
```
// have access to req and res objects!
function selgaMiddleware(req, res, next) {
  console.log("MIDDLEWARE!");
  // next is required by express (instead of a return)
  next();
}
```
3. Add selgaMiddleware to get request: `app.get('/', selgaMiddleware, (req, res) => {`
4. What happens if we don't use `next()`?
5. Another middleware example:
```
function another(req, res, next) {
  console.log("ANOTHER ONE!")
  next();
}
```
6. Add another to get request: `app.get('/', selgaMiddleware, another, (req, res) => {`
7. Add middleware to all routes: `app.use(selgaMiddleware);`
8. Update routes to standard uses (GET is already good, test in Postman)
9. CREATE:
```
app.post('/create', (req, res) => {
  console.log(req.body);
  db.data.users.push({id: uuidv4(), name: req.body.name, state: req.body.state });
  db.write();
  res.send('User created!');
});
```
10. Uh oh, but it's not working. Add `app.use(express.json())`:
```
// Used to parse JSON bodies
app.use(express.json()); 
// Parse URL-encoded bodies using query-string library
// app.use(express.urlencoded()); 
// or
// Parse URL-encoded bodies using qs library
// app.use(express.urlencoded({ extended: true })); 
```
11. UPDATE:
```
app.put('/update/:id', (req, res) => {
  let userToUpdate = db.data.users.find((user) => user.id === req.params.id);
  userToUpdate.name = req.body.name;
  userToUpdate.state = req.body.state;
  db.write();
  res.send(`User updated: ${req.params.id} (state changed: ${req.body.state})`);
});
```
12. DELETE: `app.delete('/delete/:id', (req, res) => {`
13. Update cors, update port
`import cors from 'cors';`
`app.use(cors());`
`const port = process.env.PORT || 3001;`
