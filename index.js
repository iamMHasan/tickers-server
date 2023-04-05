const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const port = 5000
const tickerRoute = require("./routes/ticker")

dotenv.config()

const app = express()
app.use(tickerRoute)

// connect mongodb
console.log(process.env.DATABASE)
mongoose.connect(process.env.DATABASE)
.then(console.log("database connected"))

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})