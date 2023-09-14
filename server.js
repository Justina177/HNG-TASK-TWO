const express = require ("express");
const dotenv = require ("dotenv").config();
const router  = require ("./routes/userRoute.js")

const connect = require ("./db/connect.js")

connect()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json()); 
app.use('/api', (router)) ;

app.listen(port, () =>{console.log(`Server Running on port ${port}`)
})
