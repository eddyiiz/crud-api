require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.use(express.json());

//mongodb configs
mongoose.connect(process.env.DATABASE)
const db = mongoose.connection
db.on('error', err=> console.error(err))
db.on('open', ()=> console.log('database connected'))

//middleware 
const usersRouter = require("./routes/users.js")
app.use("/users", usersRouter)

//port and listening
const port = process.env.PORT || 3030;
app.listen(port, ()=> console.log("server running"))