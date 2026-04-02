import { Router } from "express";
import { signup, login, getRank, logout, upgradeCastle } from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", protectRoute, logout);
router.get("/rank/:id", getRank);
router.get("/castle/upgrade", protectRoute, upgradeCastle);

export default router;