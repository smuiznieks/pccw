import express from 'express';
import { Low, JSONFile } from 'lowdb';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const accessTokenSecret = 'somerandomaccesstoken';

const app = express();
// console.log(`using path: ${path.resolve()}`);

// Port must be unique!
const port = process.env.PORT || 3001;

app.use(cors());

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

function selgaMiddleware(req, res, next) {
  // console.log('MIDDLEWARE!');
  next();
}

function otherMiddleware(req, res, next) {
  // console.log('Another one');
  next();
}

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

app.use(selgaMiddleware, authenticateJWT);

// Used to parse JSON bodies
app.use(express.json()); 
// Parse URL-encoded bodies using query-string library
// app.use(express.urlencoded()); 
// or
// Parse URL-encoded bodies using qs library
// app.use(express.urlencoded({ extended: true })); 

// CRUD - create, read, update, delete
// READ
app.get('/', otherMiddleware, (req, res) => {
  res.json(db.data.users);
});

// CREATE
app.post('/create', (req, res) => {
  // console.log(req.body);
  db.data.users.push({id: uuidv4(), name: req.body.name, state: req.body.state });
  db.write();
  res.send('User created!');
});

// DELETE
app.delete('/delete/:id', (req, res) => {
  const { role } = req.user;

  if (role != 'admin') {
    return res.sendStatus(403);
  }

  db.data.users = db.data.users.filter((user) => user.id !== req.params.id);
  db.write();
  res.status(204).send(`User deleted: ${req.params.id}`);
});

// UPDATE
app.put('/update/:id', (req, res) => {
  let userToUpdate = db.data.users.find((user) => user.id === req.params.id);
  userToUpdate.name = req.body.name;
  userToUpdate.state = req.body.state;
  db.write();
  res.send(`User updated: ${req.params.id} (updated name: ${req.body.name} /// update state: ${req.body.state})`);
});

app.get('/test', (req, res) => {
  res.json({'message': 'Hello World!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
