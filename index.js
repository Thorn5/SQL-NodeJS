// npm init
// npm install express --save
// npm install nodemon --save
// npm install pg --save // postgres pool
// npm install dotenv --save // access .env
// npm install body-parser --save // needed for req.body
// .env PGPORT=5432 (postgres default port)
// package.json entry "start": "nodemon index.js",

const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config()
// console.log(process.env) // working
const port = 8001
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const { Pool } = require('pg');
const { query } = require('express');
// const { query } = require('express');
const pool = new Pool();

//USERS
app.get("/users/", (req, res) => {
  pool
  .query('SELECT * from users;')
  .then(({rows}) => res.json(rows))
  // .catch(e => res.sendStatus(404))
  .catch(e => {
    console.log(e)
    res.sendStatus(500)
});
})

app.get("/api/users/:id", (req, res) => {
  const {id} = req.params;
  console.log(id);
  pool
  .query('SELECT * from users WHERE id=$1;', [id])
  .then(({rows}) => res.json(rows))
  // .catch(e => res.sendStatus(404))
  .catch(e => {
    console.log(e)
    res.sendStatus(500)
});
})

//ORDERS
app.get("/orders/", (req, res) => {
  pool
  .query('SELECT * from orders;')
  .then(({rows}) => res.json(rows))
  // .catch(e => res.sendStatus(404))
  .catch(e => {
    console.log(e)
    res.sendStatus(500)
});
})



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})