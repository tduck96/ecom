const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

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
app.use(express.json())
app.use(cors())

app.post('/api/add', (req, res) => {
    user = req.body;
    console.log(user)
})

// app.get('/api/get', (req, res) => {
//     const sqlGet = con.query(`SELECT * FROMitems`)
//     res.send(sqlGet)
// })

app.listen(3001, (req, res) => {
    console.log('running on port 3001')
});