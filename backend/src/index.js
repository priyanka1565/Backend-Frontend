
const express = require("express");
//cors is cross origin resource sharing
const cors = require("cors")
const db = require("./db.json")

//middleware
const logger = (req, res, next) => {
    console.log("Before", req.method, req.url);
    next();
    console.log("After", req.method, req.url)
};

const logger2 = (req, res, next) => {
    console.log("Before2", req.method, req.url);
    next();
    console.log("After2", req.method, req.url);
    
};

const auth = (req, res) => {
    if (
        req.body &&
        req.body.username === "Priyanka"
        && req.body.password === "1234") {
        next();
        
    } else {
        res.send("Not Authnticate")
    }

        
    
    
    
}
    


const app = express();
app.use(cors());
app.use(auth)
// app.use(logger);
// app.use(logger2);


//get

app.get("/", (req, res) => {
    console.log("Request", req.method, req.url);
    res.send("Sucess");
})

//post
app.post("/", (req, res) => {
  console.log("Request", req.method, req.url);
  res.send("Failed");
});

// app.get("/products", (req, res) => {
//     res.send(db.products)
// })

app.listen("9090", async () => {
    console.log("app is runing on http://localhost:9090")
})
