import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true 
    },
    password: { 
        type: String, 
        required: true,
        minlength:6
    },
    verified: { 
        type: Boolean, 
        default: false 
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); 
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = function (candidatePassword){
    return bcrypt.compare(candidatePassword,this.password);
}

const userModel = mongoose.model("User", UserSchema);

export default userModel;
