import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('Connected to mongoDB');
}).catch((error)=>{
    console.log(`${error} connecting to mongoDB`);
    
})

const app = express();

app.use(express.json());
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
});

app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statuscode).json({
        sucess: false,
        error: message,
        statuscode: statuscode, // here we can write just statuscode because the variable we have declared is same.
        
    });
})