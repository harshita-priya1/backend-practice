const express = require('express'); // Web Framework

const app = express(); // define our app using express
const greet = require("./api/greetings.js"); // import our greetings module
const port = process.env.PORT||3000; // set our port

const bodyParser = require("body-parser"); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // support json encoded bodies

app.use("/greeting", greet); // use our greetings module

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});