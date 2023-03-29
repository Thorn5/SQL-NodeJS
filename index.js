// npm install express --save
// npm install nodemon
// npm install dotenv --save

require('dotenv').config()
const express = require('express');
const app = express();

console.log(process.env) // remove this after you've confirmed it is working