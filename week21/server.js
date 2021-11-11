import express from 'express';
import { Low, JSONFile } from 'lowdb';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const app = express();
// console.log(`using path: ${path.resolve()}`);

// Port must be unique!
const port = 3001;

// Use JSON file for storage
const file = path.join(path.resolve(), 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

// If file.json doesn't exist, db.data will be null
// Set default data
// db.data ||= { users: [] }
db.data = db.data || { users: [] } // for node < v15.x
// console.log(db.data);

// CRUD - create, read, update, delete
// READ
app.get('/', (req, res) => {
  res.json(db.data.users);
});

// CREATE --- typically app.post
app.get('/create', (req, res) => {
  db.data.users.push({id: uuidv4(), name: 'Selga', state: 'OH' });
  db.write();
  res.send('User created!');
});

// DELETE --- typically app.delete
app.get('/delete/:id', (req, res) => {
  db.data.users = db.data.users.filter((user) => user.id !== req.params.id);
  db.write();
  res.send(`User deleted: ${req.params.id}`);
});

// UPDATE --- typically app.put
app.get('/update/:id/:state', (req, res) => {
  console.log(db.data.users.find((user) => user.id === req.params.id));
  db.data.users.find((user) => user.id === req.params.id).state = req.params.state;
  db.write();
  res.send(`User updated: ${req.params.id} (state changed: ${req.params.state})`);
});

app.get('/test', (req, res) => {
  res.json({'message': 'Hello World!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
