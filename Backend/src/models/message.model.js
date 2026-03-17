import mongoose from "mongoose";

const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    chat: { 
        type: Schema.Types.ObjectId, 
        ref: "Chat", 
        required: true 
    },
    role: { 
        type: String, 
        enum: ["user", "ai"], 
        required: true 
    },
    content: { 
        type: String, 
        required: true },
  },
  { timestamps: true },
);

MessageSchema.index({ chat: 1, createdAt: 1 });

const messageModel = mongoose.model("Message", MessageSchema);

export default messageModel;
