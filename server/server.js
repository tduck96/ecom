const express = require('express');
const mysql = require('mysql2');


const con = mysql.createConnection({
    host: 'localhost', 
    user: 'tom',
    password: 'pizza-hut',
    database: 'ecom'
})

con.connect();

// con.query(
// `INSERT INTO items
// VALUES(00000, 'coaster', 10.99, 'Drink Coaster made from pressed flowers', 'www.katelynjdowd.com' )`)

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3005, (req, res) => {
    console.log('running on port 3005')
});