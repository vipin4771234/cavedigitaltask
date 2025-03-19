import express from "express";
import {
  userSignin,
  userSignup,
} from "../controllers/userController.js";
import * as validator from "../middleware/validators/index.js";

const router = express.Router();

router.post("/signin", validator.userSignIn, userSignin);
router.post("/signup", validator.userSignUp, userSignup);

export default router;
