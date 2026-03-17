import userModel from "../models/user.model.js";
import { sendEmail } from "../services/mail.service.js";
import jwt from "jsonwebtoken";

export const registerUserController = async (req, res)=>{
    const {username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"User with this username or email already exist",
            success:false,
            err:"user already exist"
        })
    }

    const user = await userModel.create({
        username, email, password
    })

    const emailVerifiedToken = jwt.sign({
        email:user.email
    },process.env.JWT_SECRET);

    await sendEmail({
        to:email,
        subject:"Welcome to Perplexity",
        html:`<p>Hi, ${username},</p>
        <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on Board!</p>
        <p>Click the link below to verify your account</p>
        <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerifiedToken}">Verify Account</a>
        <p>Best regards,<br> The Perplexity Team </p>`
    })

    res.status(201).json({
        message:"User Register Successfully.",
        success:true,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
}

export const loginUserController = async (req, res) =>{
    const { email, password } = req.body;

    const user = await userModel.findOne({email}).select("+password");

    if(!user){
        return res.status(400).json({
            message:"Invalid Credentials",
            succes:false,
            err:"user not found"
        })
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect){
        return res.status(400).json({
            message:"Invalid Credentials",
            success:false,
            err:"Invalid Password"
        })
    }

    if(!user.verified){
        return res.status(400).json({
            message:"Verify your Email first before Login",
            success:false,
            err:"Email not verified"
        })
    }

    const token = jwt.sign({
        id:user._id,
        username:user.username
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
        message:"User Login Successfull.",
        success:true,
        user:{
            id:user._id,
            email:user.email,
            username:user.username
        }
    })
}

export const getMeController = async (req, res)=>{
    const userId = req.user.id;

    const user = await userModel.findById(userId);

    if(!user){
        return res.status(400).json({
            message:"user not found",
            success:false,
            err:"user not found"
        })
    }

    res.status(200).json({
        message:"User details Fetched Successfully.",
        success:true,
        user
    })
}

export const verifyEmailController = async (req, res)=>{

    const { token } = req.query;
    
    try{

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const user = await userModel.findOne({email:decoded.email});

    if(!user){
        return res.status(401).json({
            message:"Invalid Email",
            success:false,
            err:"User not found"
        })
    }

    user.verified = true;

    await user.save();

    const html = 
    `<h1>Email Verified Successfully.</h1>
     <p>Your email is verified, now you can login your account.</p>
     <a href="http://localhost:3000/api/auth/login">Go to Login</a>`
    
    res.send(html);

    }catch(err){
        return res.status(401).json({
            message:"Unautharized or Expired Token",
            success:false,
            err:err.message
        })
    }
}