import { Router } from "express";
import { registerUserController } from "../controllers/auth.controller.js";
import { validateRegister } from "../middlewares/validators/auth.validator.js";
const authRouter = Router();

authRouter.post("/register",validateRegister,registerUserController);




export default authRouter;