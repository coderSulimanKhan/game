import { Router } from "express";
import { signup, login, getRank, logout, upgradeCastle, upgradeTrain, upgradeTech, buyTroops, sellTroops } from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", protectRoute, logout);
router.get("/rank/:id", getRank);
router.get("/castle/upgrade", protectRoute, upgradeCastle);
router.get("/train/upgrade", protectRoute, upgradeTrain);
router.get("/tech/upgrade", protectRoute, upgradeTech);
router.post("/troops/buy", protectRoute, buyTroops);
router.post("/troops/sell", protectRoute, sellTroops);

export default router;