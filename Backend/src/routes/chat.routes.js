import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import { getChatsController, getMessagesController, sendMessagecontroller, deleteChatController } from "../controllers/chat.controller.js";

const chatRouter = Router();

chatRouter.post("/message", authUser, sendMessagecontroller);

chatRouter.get("/",authUser, getChatsController);

chatRouter.get("/:chatId/messages",authUser ,getMessagesController);

chatRouter.delete("/delete/:chatId",authUser, deleteChatController)

export default chatRouter;