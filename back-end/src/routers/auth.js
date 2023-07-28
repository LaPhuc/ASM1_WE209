import express from "express";
import { Login, Register, resetPassword, sendResetLinkEmail } from "../controllers/auth";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/password/email", sendResetLinkEmail);
router.post('/password/reset', resetPassword)
export default router;
