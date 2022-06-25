const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost', 
    user: 'tom',
    password: 'pizza-hut',
    database: 'ecom'
})

con.connect();

module.exports = con