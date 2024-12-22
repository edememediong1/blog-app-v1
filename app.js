require("dotenv").config();

const express = require("express")
const expressLayout = require('express-ejs-layouts')

const connectDB = require("./server/config/db")
connectDB()


const app = express()
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'))

//TEMPLATING ENGINE
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use("/", require("./server/routes/main"))


app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`App listening on Port ${PORT}`)
})