import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config.js";
import cookie from "cookie";

const signup = async (req, res) => {
  try {
    const { name, password } = req?.body;

    if (!name || !password) {
      return res.status(400).json({ success: false, message: "Name/password is not defined" });
    };

    const existingUser = await User.findOne({ name });

    if (existingUser) return res.status(400).json({ success: false, message: "User already exists." });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      password: hashPassword
    });

    const token = jwt.sign({ id: newUser._id }, config.JWT_SECRET, { expiresIn: "7d" });
    res.setHeader("Set-Cookie", cookie.serialize("token", token, { httpOnly: true, secure: config.NODE_ENV === "production", sameSite: "strict", maxAge: 7 * 24 * 60 * 60, path: "/" }));
    return res.status(201).json({ success: true, message: "User created successfully", data: { ...newUser, password: "" } });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { name, password } = req?.body;

    if (!name || !password) {
      return res.status(400).json({ success: false, message: "Name/password is not defined" });
    };

    const user = await User.findOne({ name });

    if (!user) return res.status(400).json({ success: false, message: "User not found." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) return res.status(400).json({ success: false, message: "Incorrect password" });

    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });
    res.setHeader("Set-Cookie", cookie.serialize("token", token, { httpOnly: true, secure: config.NODE_ENV === "production", sameSite: "strict", maxAge: 7 * 24 * 60 * 60, path: "/" }));
    return res.status(201).json({ success: true, message: "User created successfully", data: { ...user, password: "" } });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export { signup, login, profile };