const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')



dotenv.config()


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true,
 })
    .then(() => {
        console.log("DB CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!! with CONNECTING TO DB")
        console.log(err)
    })

//Middleware:

app.use(express.json())
app.use('/api/auth', authRoute)


app.listen(8000, ()=>{
    console.log('Server running on 8000 backend')
})