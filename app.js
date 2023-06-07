const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors())



const authRoutes = require("./routes/auth")
const pesawatRoutes = require("./routes/pesawat")
app.use('/pesawat', pesawatRoutes)
app.use('/auth', authRoutes)


app.get('/', (req, res) => {
    res.send('Hello World! 2')
})

mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

let db = mongoose.connection

db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))

db.once('open', ()=>{
    console.log('Database is connected')
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`)
})