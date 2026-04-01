import jwt from "jsonwebtoken"
import config from "../../config.js";

const protectRoute = (req, res, next) => {
  try {
    const token = req?.cookies?.token;
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized access, please login again" });
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized access, please login again" });
  }
};

export { protectRoute };