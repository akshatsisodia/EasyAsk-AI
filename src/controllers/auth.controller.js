import userModel from "../models/user.model.js";
import { sendEmail } from "../services/mail.service.js";

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

    await sendEmail({
        to:email,
        subject:"Welcome to Perplexity",
        html:`<p>Hi, ${username},</p>
        <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on Board!</p>
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



