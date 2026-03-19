import { ChatMistralAI } from "@langchain/mistralai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";

const mistralModel = new ChatMistralAI({
    model:"mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY
});

const geminiModel = new ChatGoogleGenerativeAI({
    model:"gemini-2.5-flash-lite",
    apiKey:process.env.GEMINI_API_KEY
})

export const generateMessage = async (messages)=>{
    
    const response = await mistralModel.invoke(messages.map((msg)=>{
        if(msg.role === "user"){
            return new HumanMessage(msg.content);
        }else if(msg.role === "ai"){
            return new AIMessage(msg.content);
        }
    }));

    return response.text;
}

export const generateChatTitle = async (message) =>{

    const response = await mistralModel.invoke([new SystemMessage(`you are a helpfull assistant that generates concise and descriptive title for chat conversations.
    User will provide the first message of a chat conversation and you will genrate a title that captures the essance of the conversationin 2-3 words. The title should be clear, relevant and engaging, giving users a quick understanding of the chat's topic`), new HumanMessage(`generate a title for a chat conversation based on the following first message: ${message}`)])

    return response.text;
}