const express = require('express');
const router = express.Router();
const con = require('./config/config');


router.get('/api/get', (req, res) => {
    const sqlFetch = (`SELECT * FROM items`)
    con.query(sqlFetch, (err, data) => {
        if (err) console.log(err)

        res.send(data)
    })
}
)

module.exports = router;