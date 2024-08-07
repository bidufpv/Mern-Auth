import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('Connected to mongoDB');
}).catch((error)=>{
    console.log(`${error} connecting to mongoDB`);
    
})

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}` );
});
