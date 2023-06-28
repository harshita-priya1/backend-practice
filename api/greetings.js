const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello World!');
});

router.post("/hi", (req,res)=>{
    const name = req.body.name;
    try {
        if(name=="" || name == undefined) throw new Error("name is required");
        else if(name=="Harshita") res.send("Hi Harshita!");
        else res.send(`hello ${name}!`);
    }
    catch(e){
        res.send(e.message);
    }
    res.send(`Hi ${name}!`);
});

module.exports = router;