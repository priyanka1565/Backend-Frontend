
const express = require("express");
//cors is cross origin resource sharing
const cors = require("cors")
const db = require("./db.json")

//middleware
const logger = (req, res, next) => {
    console.log("Before", req.method,req.url);
    next();
    console.log("After",req.method,req.url)
}

const app = express();
app.use(logger);

//get

app.get("/", (req, res) => {
    console.log("Request",req.method,req.url)
})

// app.get("/products", (req, res) => {
//     res.send(db.products)
// })

app.listen("9090", async () => {
    console.log("app is runing on http://localhost:9090")
})
