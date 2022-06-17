const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json())

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


app.use(cors())

app.post('/api/add', (req, res) => {
    user = req.body;
    console.log(user)
})

app.get('/api/get', (req, res) => {
    const sqlFetch = (`SELECT * FROM items`)
    con.query(sqlFetch, (err, data) => {
        if (err) console.log(err)

        res.send(data)
    })
}
)

app.get('/api/get/:id', (req, res) => {

    const id = req.params.id
    console.log(req.params.id)
    
    const sqlGetSingle = (`SELECT * FROM items WHERE id = ${id}`)

con.query(sqlGetSingle, (err, data) => {
    if (err) console.log(err)
    res.send(data)
})

})

// app.get('/api/get', (req, res) => {
//     const sqlGet = con.query(`SELECT * FROMitems`)
//     res.send(sqlGet)
// })

app.listen(3001, (req, res) => {
    console.log('running on port 3001')
});