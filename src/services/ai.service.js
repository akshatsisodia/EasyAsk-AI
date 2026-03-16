import { ChatMistralAI } from "@langchain/mistralai";

const model = new ChatMistralAI({
    model:"mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY
});

export const chatAI = async ()=>{
    await model.invoke("Tell me something that you think about india in tech industry in 20 words.")
    .then((response)=>{
        console.log(response.text);
    })
    
}