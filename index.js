const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')
const cors = require('cors')
const path = require("path");


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



app.use(
    cors({
        origin:'*',
    })
)


app.use(express.json())






app.use(express.static(path.resolve(__dirname, "./netflix/build")));

app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "./netflix/build", "index.html"));
});





app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/lists', listRoute)






  
// app.use(express.static(path.join(__dirname, "./netflix/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/netflix/build', 'index.html'));
// });



app.listen(process.env.PORT || 8000, ()=>{
    console.log('Server running on 8000 backend')
})