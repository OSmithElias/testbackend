const express= require('express');
server= express();
const port=3500;
const bodyParser = require('body-parser');

//server.use(bodyParser)

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})


server.get('/', (req,res) => {
    res.statusCode=200
    res.send({
        message:"We did it!!"
    });
    console.log(`request recieved`)
})



