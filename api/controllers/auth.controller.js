import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utility/error.js";

export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);

    // const deletedUser = await User.findOne({ username: 'Hero' });
    // // Delete the user with the username 'Hero'
    // await User.deleteOne({ username: 'Hero' });

    // console.log('User with username "Hero" has been deleted');

    // if (!deletedUser) {
    //     console.log('User with username "Hero" has been deleted');
    // } else {
    //     console.log('User still exists:', deletedUser);
    // }
    
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save();
    res.status(201).json({message: "User created succesfully"})
    } catch (error) {
        next(error);
        
    } 
};