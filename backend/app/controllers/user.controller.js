import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config.js";
import cookie from "cookie";

const signup = async (req, res) => {
  try {
    const { name, password } = req?.body;
    console.log(req?.body);

    if (!name || !password) {
      return res.status(400).json({ success: false, message: "Name/password is not defined" });
    };

    const existingUser = await User.findOne({ name });

    if (existingUser) return res.status(400).json({ success: false, message: "User already exists." });

    if (password?.length < 6) return res.status(400).json({ success: false, message: "Password must me at least 6 characters." })

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      password: hashPassword
    });

    const token = jwt.sign({ id: newUser._id }, config.JWT_SECRET, { expiresIn: "7d" });
    res.setHeader("Set-Cookie", cookie.serialize("token", token, { httpOnly: true, secure: config.NODE_ENV === "production", sameSite: "strict", maxAge: 7 * 24 * 60 * 60, path: "/" }));
    return res.status(201).json({ success: true, message: "User created successfully", data: { ...newUser._doc, password: "" } });
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
    return res.status(201).json({ success: true, message: "User login successfully", data: { ...user._doc, password: "" } });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const getRank = async (req, res) => {
  const { id } = req?.params;
  try {
    const user = await User.findById(id).select("power");
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    const higherCount = await User.countDocuments({ power: { $gt: user.power } });
    const rank = higherCount + 1;
    res.status(200).json({ success: true, message: "Rank", data: rank });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export { signup, login, getRank };