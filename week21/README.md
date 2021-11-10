# Week 21

Make sure to npm init and npm install any dependencies before starting!

1. I cleaned up the comments from the week19 backend project but everything else is the same!
2. Lowdb documentation: https://www.npmjs.com/package/lowdb 
3. Copy the following import: `import { Low, JSONFile } from 'lowdb'`
4. Restart server
5. If you're having trouble importing it in your project please read this: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
6. Update package.json with this line before the closing curly brace: `"type": "module"`
7. Restart server
8. Update express import: `import express from 'express';`
9. Create db.json file
10. Copy and paste the following from the documentation:
```
// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)
```
11. Restart server
12. What is __dirname? This is an example of using the file system! Referencing a file in our folder. 
13. Resolve issues by adding this import: `import path from 'path'`
14. Update the following line 6: `const file = path.join(path.resolve(), 'db.json')`
15. `console.log(path.resolve());` to see what is happening here 
16. Continue to follow the documentation: 
```
// Read data from JSON file, this will set db.data content
await db.read()
```
17. Update db.json to JSON
18. Continue to following the documentation: 
```
// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { posts: [] }
```
WARNING! `||=` was added in Node.js 15.0.0
You can check your node version by executing `node -v`
What would you do if you were on an older version of node?
Switch this to do this another way! 
```
if (!db.data) db.data = { posts: [] };
console.log(db.data);
```
19. Restart server
20. Update the default route to READ (CRUD): `response.json(db.data.posts);`
21. Restart server
22. Add a route to CREATE (CRUD): 
WARNING! We wouldn't normally be using app.get for CREATE, UPDATE or DELETE
```
app.get('/create', (req, res) => {
  db.data.posts.push({id: 1, name: 'Selga', content: 'wow here we go!'});
  db.write();
  res.send('added!');
});
```
23. Add uuid by running `npm install uuid` and importing `import { v4 as uuidv4 } from 'uuid';`
24. Update id in create request: `db.data.posts.push({id: uuidv4(), name: 'Selga', content: 'wow here we go!'});`
25. Restart server, demo, start server, get
26. Add a route to DELETE (CRUD):
```
app.get('/delete/:id', (req, res) => {
  db.data.posts = db.data.posts.filter((post) => post.id !== req.params.id);
  db.write();
  res.json(`Deleted id: ${req.params.id}`);
});
```
27. Restart server, demo
28. Add a route to UPDATE (CRUD):
```
app.get('/update/:id/:name', (req, res) => {
  db.data.posts.find((post) => post.id === req.params.id).name = req.params.name;
  db.write();
  res.json(`Updated id: ${req.params.id}`);
});
```
29. Restart server, demo
