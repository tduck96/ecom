require('dotenv').config();

const express = require('express');
const cors = require('cors');
const con = require('./config/config');

const app = express();

app.use(express.json());
// app.use(cors({
//   origin: "*",
//   credentials: true
// }))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
     res.header(
       "Access-Control-Allow-Headers",
       ["Origin, X-Requested, Content-Type, Accept"],

       res.header("Access-Control-Allow-Methods",
       "POST, PUT, PATCH, GET, DELETE, OPTIONS")
     )
     res.header("Access-Control-Allow-Credentials", "true")

    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      res.header("Access-Control-Allow-Origin", "*")
      return res.status(200).json({})
    }
    next()
  })



// const corsOptions = {
//     origin: "*", 
//     optionsSuccessStatus: "200",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     headers: Content-Type, Accept,
//     credentials: true
// 

const stripe = require('stripe')('sk_test_51LEGAJHh9cvMPqXdgWjoQKDnT69hqIGXoIHElOi7VmppFKaGb4jpQkpal9NQQOKTfznAXqryT0D5CXH2RNh9Iipg001T9dgtGV');

// Send to Stripe

app.post('/create-checkout-session', async (req, res) => {

const price = req.body.sum 
const priceCents = (price * 100) 
console.log(priceCents)

try {
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
     success_url: 'https://katiesprettyprints.herokuapp.com/paymentsuccess' ,
     cancel_url: 'https://katiesprettyprints.herokuapp.com/cart',
     
});
  res.json({ url: session.url});
 } catch {
  console.log('error')
 }})



// Create User 

app.post('/api/register', (req, res) => {
   const email = req.body.email;
   const password = req.body.password;

        if (email === undefined || password === undefined) {
         res.send({error: "Invalid email/password"}) }
        else {
    const pushUser = (`INSERT INTO users VALUES ("${email}", "${password}") `)

     con.query(pushUser, (err, res) => {
         if (err) console.log(err) 
         else {
             console.log('record added') }
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
                res.set("Access-Control-Allow-Origin", '*' )
            res.send(result)
               }
               else {
                   res.set("Access-Control-Allow-Origin", '*' )
                   res.send({message: "Wrong username/password"})
                       }
           
                   })
                  } 
      
                 
                
                 );


// Get Items at Home Page Start up 

app.get('/api/get', (req, res) => {
  const sqlFetch = (`SELECT * FROM items`)
  if (res) {
    con.query(sqlFetch, (err, data) => {
        if (err) throw(err)
        res.send(data)
    })

} else {
  console.log("Error")
}
}
);
//get/

// Get item for Detaisl 
app.get('/api/get/:id', (req, res) => {

    const id = req.params.id
    console.log(req.params.id)
    const sqlGetSingle = (`SELECT * FROM items WHERE id = ${id}`)

 

    if (res) {
con.query(sqlGetSingle, (err, data) => {
    if (err) console.log(err)
    res.set("Access-Control-Allow-Origin", '*' )
    res.send(data)
})
    }
else {
  console.log(error)
}   
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`running on ${port}`)
});
