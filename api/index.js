import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);