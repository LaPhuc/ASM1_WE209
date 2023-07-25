import express from "express";
import { Register } from "../controllers/auth";

const router = express.Router();

router.post("/register", Register);
export default router;
