import { Router } from "express";
import { registerUserController, verifyEmailController, loginUserController ,getMeController } from "../controllers/auth.controller.js";
import { validateRegister } from "../validators/auth.validator.js";
import { authUser } from "../middlewares/auth.middleware.js";

const authRouter = Router();

// @route /api/auth/register Api
// @goal To register New User
authRouter.post("/register",validateRegister,registerUserController);

// @route /api/auth/Login Api
// @goal To Login the Registered User
authRouter.post("/login",loginUserController);

// @route /api/auth/get-me Api (protected)
// @goal To Fetch all details of Loggedin User
authRouter.get("/get-me",authUser,getMeController);

// @route /api/auth/verify-email Api
// @goal To Verify the User through Email
authRouter.get("/verify-email",verifyEmailController);

export default authRouter;