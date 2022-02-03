// To require packages needed
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const {PORT, BASE_URL} = process.env


const app = express();

// To inialize the packages
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// For Route
app.use("/api", require("./routes/home.route"));

app.use('/',(req,res) => {
    res.send('welcome to homepage')
})

// app.get("/", (req, res) =>{
//     res.send("Hello Johnmark")
// })

// To start server
app.listen( PORT || 8080, () => {
    console.log(`listening to port ${BASE_URL}${PORT}`)
})