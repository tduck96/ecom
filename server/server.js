require('dotenv').config();


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 5;

const app = express();
app.use(express.json());
   const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const con = mysql.createConnection({
    host: 'localhost', 
    user: 'tom',
    password: 'pizza-hut',
    database: 'ecom'
})

con.connect();
app.use(cors())

// Send to Stripe

app.post('/create-checkout-session', async (req, res) => {
const price = req.body.sum 
const priceCents = (price * 100) 
console.log(priceCents)
 
   const session = await stripe.checkout.sessions.create({
     
     line_items: [{
        
            price_data : { 
                currency: 'usd',
                product_data: {
                    name : 'Katies Prints'
            },
            unit_amount: priceCents
        },
        quantity: 1
    }],
     mode: 'payment',
     success_url: 'http://localhost:3000/' ,
     cancel_url: 'http://localhost:3000/',
     
});
    
   res.json({ url: session.url});

 });


    
   
    // const id = cart[0].id
    // const quantity = cart[0].quantity;

// const querySearch = `SELECT * FROM items WHERE id = ${getit}`

// con.query(querySearch, (err, res) => { 
//     if (res) console.log(res);
//     if (err) console.log(err)
// })

   
// })

// Create User 

app.post('/api/register', (req, res) => {
   const email = req.body.email;
   const password = req.body.password;

//    bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(password, salt, function(err, hash){
//         const hashpass = hash;
//         console.log(hashpass)

        if (email === undefined || password === undefined) {
            res.send({error: "Invalid email/password"}) }
        else {
            const pushUser = (`INSERT INTO users VALUES ("${email}", "${password}") `)

                 con.query(pushUser, (err, res) => {
                      if (err) console.log(err) 
                            else {
                                console.log('record added')
                            }
})
}
    })
   
        

// Login user 

app.post('/api/login' , (req, res) => {
   
        const email = req.body.email
        const password = req.body.password

        const validateUser = (`SELECT password FROM users WHERE email = "${email}"`)

          con.query(validateUser, (err, result) => {
            if (err) {
             res.send({err: err})
            }
            if (result) {
            res.send(result)
               }
               else {
                   res.send({message: "Wrong username/password"})
                       }
           
                   })
                 }
                 );
    


       

       
                     
            

   

     
  
  


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