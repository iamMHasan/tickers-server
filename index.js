const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const port = 5000
const tickerRoute = require("./routes/ticker")

dotenv.config()

const app = express()
app.use(tickerRoute)

// connect mongodb
mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Error connecting to database:", err);
  });

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})