import { generateChatTitle, generateMessage } from "../services/ai.service.js";
import chatModel from "../models/chat.model.js";
import messageModel from "../models/message.model.js";

export const sendMessagecontroller = async (req, res) => {
  const userId = req.user.id;
  const { message, chatId } = req.body;

  let chat = null, title = null;

  if (!chatId) {
    title = await generateChatTitle(message);
    chat = await chatModel.create({
      user: userId,
      title: title,
    });
  }

  const userMessage = await messageModel.create({
    chat: chatId || chat._id,
    content: message,
    role: "user",
  });

  const messages = await messageModel.find({chat:chatId || chat._id});

  const result = await generateMessage(messages);

  const aiMessage = await messageModel.create({
    chat: chatId || chat._id,
    content: result,
    role: "ai",
  });

  res.status(201).json({
    chat,
    title,
    aiMessage,
  });

};

export const getChatsController = async (req, res) =>{
    const userId = req.user.id;

    const chats = await chatModel.find({
        user:userId
    })

    res.status(200).json({
        message:"chats retrieved successfully.",
        chats
    })

}

export const getMessagesController = async (req, res) =>{
    const userId = req.user.id;
    const chatId  = req.params.chatId;

    const chat = await chatModel.findOne({
        _id:chatId,
        user:userId
    })

    if(!chat){
        return res.status(404).json({
            message:"chat not found"
        })
    }

    const messages = await messageModel.find({chat:chatId});

    res.status(200).json({
        message:"messages retrieved successfully.",
        messages
    })
}

export const deleteChatController = async (req, res) =>{
    const userId = req.user.id;
    const chatId = req.params.chatId;

    const chat = await chatModel.findOneAndDelete({
        _id:chatId,
        user:userId
    })

    await messageModel.deleteMany({
        chat:chat._id
    })

    if(!chat){
        return res.status(404).json({
            message:"chat not found"
        })
    }

    res.status(200).json({
        message:"Chat deleted Successfully."
    })

}