const mysql = require('mysql2');
//
const con = mysql.createPool({
    host: "us-cdbr-east-05.cleardb.net", 
    user: 'b9802492a76486',
    password: '1f442978bb3037e',
    database: 'heroku_67ae66b1059c2d1',
    waitForConnections: true,
    connectionLimit: 10
})

//  con.connect(function(err) {
//     if (err){
//         console.error('error')
//     return;
// }
//  });


module.exports = con;

