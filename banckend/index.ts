import express from "express";
import 'dotenv/config';

const app = express();
const port:number = 3000 || process.env.PORT;
app.get('/',(req,res,next)=>{
    res.json({'message':'first get request'})
});

app.listen(port,()=>{
    console.log('LISTENING ON PORT: '+port)
});