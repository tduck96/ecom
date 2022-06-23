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



app.use(cors())

// Create User 

app.post('/api/register', (req, res) => {
   const email = req.body.email;
   const password = req.body.password;
        if (email === undefined || password === undefined) {
            res.send({error: "Invalid email/password"}) }
        else {
            const pushUser = (`INSERT INTO users VALUES ("${email}", "${password}") `)

con.query(pushUser, (err, res) => {
    if (err) {
        console.log(err) }
       else {
        console.log('record added')
       }
})
}})

// Login user 

app.post('/api/login' , (req, res) => {
    const email = req.body.email
    const password = req.body.password
        const validateUser = (`SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`)

con.query(validateUser, (err, result) => {
    if (err) {
     res.send({err: err})
    }

    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({message: "Wrong username/password"})
    }
      }
  )
  })
  


// Get Items at Home Page Start up 

app.get('/api/get', (req, res) => {
    const sqlFetch = (`SELECT * FROM items`)
    con.query(sqlFetch, (err, data) => {
        if (err) console.log(err)

        res.send(data)
    })
}
)


// Get item for Detaisl 
app.get('/api/get/:id', (req, res) => {

    const id = req.params.id
    console.log(req.params.id)
    
    const sqlGetSingle = (`SELECT * FROM items WHERE id = ${id}`)

con.query(sqlGetSingle, (err, data) => {
    if (err) console.log(err)
    res.send(data)
})

})



app.listen(3001, (req, res) => {
    console.log('running on port 3001')
});