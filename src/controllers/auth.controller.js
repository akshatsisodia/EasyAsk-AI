import userModel from "../models/user.model.js";

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

}



