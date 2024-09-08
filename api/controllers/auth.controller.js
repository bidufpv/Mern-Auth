import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utility/error.js";
import jwt from 'jsonwebtoken';

// Function for signup
export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save();
    res.status(201).json({message: "User created succesfully"})
    } catch (error) {
        next(error);
        
    } 
};

 
// Function for SignIn
export const signin = async(req, res, next)=>{
      const {email, password} = req.body;
      try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User Not Found'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401), 'Wrong Credentials');
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest} = validUser._doc;
        
        const expirydate = new Date(Date.now()+3600000); //for 1hour

        res.cookie('access_token', token, {httpOnly: true, expires: expirydate}).status(200).json(rest);
      } catch (error) {
        next(error);
      }
}

//for google authentication
export const google = async(req, res, next)=>{
  try {
    const user = await User.findOne({email: req.body.email});
    if(user){
      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
      const {password: hashedPassword, ...rest} = validUSer._doc;
      const expirydate = new Date(Date.now()+3600000); //for an hour

      res.cookie(
           'access_token', token,
           {httpOnly: true, expires: expirydate}
      ).status(200).json(rest);
    }else{
      const randomGeneratedPassword = (Math.random().toString(36).slice(-8) + 
      Math.random().toString(36).slice(-8));
      const hashedPassword = bcryptjs.hashSync(randomGeneratedPassword, 10);

      //for creating a new user
      const newUser = new User({
      username: req.body.name.split("").join("").toLowerCase() +
      Math.floor(Math.random()*1000).toString(36).slice(-8),

      email: req.body.email,

      password: req.body.password,

      avatar: req.body.photo
      });
      await newUser.save();
      const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
      const{password: hashedPassword2, ...rest} = newUser._doc;
      const expirydate = new Date(Date.now()+ 3600000);
      res.cookie(
        'access_token', token,{
          httpOnly: true,
          expires: expirydate
        }
      ).status(200).json(rest);
      
    };
  } catch (error) {
    next(error);
  }
};

//for github authentication
export const github = async(req, res, next)=>{
  try {
    const user2 = await User.findOne({email: req.body.email});
    if(user2){
      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
      const {password: hashedPassword, ...rest} = validUSer._doc;
      const expirydate = new Date(Date.now()+3600000); //for an hour

      res.cookie(
           'access_token', token,
           {httpOnly: true, expires: expirydate}
      ).status(200).json(rest);
    }else{
      const randomGeneratedPassword = (Math.random().toString(36).slice(-8) + 
      Math.random().toString(36).slice(-8));
      const hashedPassword = bcryptjs.hashSync(randomGeneratedPassword, 10);

      //for creating a new user
      const newUser2 = new User2({
      username: req.body.name.split("").join("").toLowerCase() +
      Math.floor(Math.random()*1000).toString(36).slice(-8),

      email: req.body.email,

      password: req.body.password,

      avatar: req.body.photo
      });
      await newUser.save();
      const token = jwt.sign({id: newUser2._id}, process.env.JWT_SECRET);
      const{password: hashedPassword2, ...rest} = newUser._doc;
      const expirydate = new Date(Date.now()+ 3600000);
      res.cookie(
        'access_token', token,{
          httpOnly: true,
          expires: expirydate
        }
      ).status(200).json(rest);
      
    };
  } catch (error) {
    next(error);
  }
};
    
  

//for signout
export const signOut = (req, res)=>{
  res.clearCookie('access_token').status(200).json('Sign Out Success')
};



// const deletedUser = await User.findOne({ username: 'Hero' });
    // // Delete the user with the username 'Hero'
    // await User.deleteOne({ username: 'Hero' });

    // console.log('User with username "Hero" has been deleted');

    // if (!deletedUser) {
    //     console.log('User with username "Hero" has been deleted');
    // } else {
    //     console.log('User still exists:', deletedUser);
    // }