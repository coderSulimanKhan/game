import { Router } from "express";
import { signup, login, getRank } from "../controllers/user.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/rank/:id", getRank);

export default router;