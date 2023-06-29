const greetMiddleware  = (req,res,next)=> {
    const name = req.body.name;
    try{
        if(name== "harshita"){
            next();
        }else if(name==""||name==undefined){
            throw new Error("name is required");
        } else {
            res.send(`hello new user ${name}!`); 
        }
    }catch(e){
        res.send(e.message);
    }
};
module.exports = greetMiddleware;