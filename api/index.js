import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('Connected to mongoDB');
}).catch((error)=>{
    console.log(`${error} connecting to mongoDB`);
    
})

const app = express();
const port = 4000;

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
});


app.use("/api/user", userRoutes);