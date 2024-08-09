const express = require("express");
const server = express();


const userRouter =require("./routers/uesrRouter");
const mobileRouter =require("./routers/mobileRouter");


const cors = require('cors');


require("dotenv").config();

const ConnectedDB = require("./config/db");


server.use(cors())


server.use(express.json());
server.use("/user",userRouter)
server.use("/mobile",mobileRouter) 

const port = process.env.PORT || 3000;



ConnectedDB().then(()=>{
    
    server.listen(port,()=>{console.log(`server is running at port no ${port}`);
    })
})
// .catch((e)=>{
//     console.log(e)
// })





