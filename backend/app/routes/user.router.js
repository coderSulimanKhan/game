import { Router } from "express";
import { signup, login, profile } from "../controllers/user.controller.js";

const router = Router();

router.get("/signup", signup);
router.post("/login", login);

export default router;