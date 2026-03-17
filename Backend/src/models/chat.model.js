import mongoose from "mongoose";

const { Schema } = mongoose;

const ChatSchema = new Schema(
	{
		user: { 
            type: Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
		title: { 
            type: String, 
            required: true, 
            trim: true, 
            default: 'New Chat' 
        },
	},
	{ timestamps: true }
);

const chatModel = mongoose.model('Chat', ChatSchema);

export default chatModel;
