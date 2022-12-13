const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("", (req, res)=>{
    res.send("<h1>Hello world!</h1>")
})
app.post("/add", (req, res)=>{
    // console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let sum =  Number(req.body.num1)+ Number(req.body.num2);
    if(sum < 1000000){
        res.json({
            status : "success",
            message : "the sum of given two numbers",
            total : `${sum}`
        })
        res.end();
    }
    else if(sum > 1000000){
        res.json({
            status : "failure",
            message : "Overflow",
            // total : `${sum}`
        })
    }
    else if(typeof(req.body.num1) !== "number" && typeof(req.body.num2) !== "number"){
        res.json({
            status : "error",
            message : "Invalid data types",
            // total : `${sum}`
        })
    }
    
})

app.post("/sub", (req, res)=>{
    // console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let sub =  Number(req.body.num1) - Number(req.body.num2);
    if(sub < 1000000){
        res.json({
            status : "success",
            message : "the sub of given two numbers",
            difference : `${sub}`
        })
        res.end();
    }
    else if(sub > -1000000){
        res.json({
            status : "failure",
            message : "Underflow",
            // difference : `${sum}`
        })
    }
    else if(typeof(req.body.num1) === "string" || typeof(req.body.num2) === "string"){
        res.json({
            status : "error",
            message : "Invalid data types",
            // difference : `${sum}`
        })
    }
    
})
app.post("/multiply", (req, res)=>{
    // console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let product =  Number(req.body.num1)*Number(req.body.num2);
    if(product < 1000000){
        res.json({
            status : "success",
            message : "the sub of given two numbers",
            result : `${product}`
        })
        res.end();
    }
    else if(product > 1000000){
        res.json({
            status : "failure",
            message : "Overflow",
            // result : `${sum}`
        })
    }
    else if(typeof(req.body.num1) === "string" || typeof(req.body.num2) === "string"){
        res.json({
            status : "error",
            message : "Invalid data types",
            // result : `${sum}`
        })
    }
    
})
app.post("/divide", (req, res)=>{
    // console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let division =  Number(req.body.num1)/Number(req.body.num2);
    if(division < 1000000){
        res.json({
            status : "success",
            message : "the division of given two numbers",
            result : `${division}`
        })
        res.end();
    }
    else if(division > 1000000){
        res.json({
            status : "failure",
            message : "Overflow",
            // result : `${sum}`
        })
    }
    else if(typeof(req.body.num1) === "string" || typeof(req.body.num2) === "string"){
        res.json({
            status : "error",
            message : "Invalid data types",
            // result : `${sum}`
        })
    }
    else if(Number(req.body.num2) === 0){
        res.json({
            status : "error",
            message : "Cannot divide by zero",
            // result : `${sum}`
        })
    }
    
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;