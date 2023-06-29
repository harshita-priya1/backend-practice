const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello World!');
});

router.post("/hi", (req,res)=>{
    res.send(`hello ${req.body.name}!`);
});

module.exports = router;