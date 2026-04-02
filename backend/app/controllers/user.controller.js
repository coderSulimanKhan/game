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

const logout = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req?.user?.id });
    if (!user) return res.status(401).json({ success: false, message: "No user to logout" });
    res.setHeader("Set-Cookie", cookie.serialize("token", "", { maxAge: 0, path: "/" }));
    res.status(200).json({ success: true, message: "Logout successfull" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
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

const upgradeCastle = async (req, res) => {
  const castleInfo = [
    [1, 100, "c", 50],
    [2, 200, "c", 100],
    [3, 300, "c", 500],
    [4, 400, "c", 1000],
    [5, 500, "c", 1500],
    [6, 600, "c", 3000],
    [7, 700, "c", 5000],
    [8, 800, "c", 10000],
    [9, 900, "c", 12000],
    [10, 1000, "c", 20000],
    [11, 100, "d", 30000],
    [12, 200, "d", 35000],
    [13, 300, "d", 50000],
    [14, 400, "d", 60000],
    [15, 500, "d", 70000],
    [16, 600, "d", 80000],
    [17, 700, "d", 90000],
    [18, 800, "d", 100000],
    [19, 900, "d", 120000],
    [20, 1000, "d", 150000],
    [21, 100000, "c", 170000],
    [22, 200000, "c", 190000],
    [23, 300000, "c", 200000],
    [24, 400000, "c", 220000],
    [25, 500000, "c", 230000],
    [26, 600000, "c", 250000],
    [27, 700000, "c", 280000],
    [28, 800000, "c", 300000],
    [29, 900000, "c", 330000],
    [30, 1000000, "c", 350000],
    [31, 2000, "d", 400000],
    [32, 2200, "d", 450000],
    [33, 2400, "d", 500000],
    [34, 2600, "d", 560000],
    [35, 2800, "d", 610000],
    [36, 3000, "d", 700000],
    [37, 3200, "d", 770000],
    [38, 3400, "d", 800000],
    [39, 3600, "d", 900000],
    [40, 3800, "d", 1000000],
    [41, 1200000, "c", 1100000],
    [42, 2500000, "c", 1200000],
    [43, 3000000, "c", 1300000],
    [44, 3500000, "c", 1400000],
    [45, 4000000, "c", 1500000],
    [46, 4500000, "c", 1600000],
    [47, 5000000, "c", 1700000],
    [48, 5500000, "c", 1800000],
    [49, 6000000, "c", 1900000],
    [50, 6500000, "c", 2000000],
  ];

  try {
    const user = await User.findOne({ _id: req?.user?.id });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const prevLevel = user?.buildings?.castle?.level;
    const requiredResources = castleInfo[prevLevel];

    if (requiredResources[2] === "c") {
      if (user?.resources?.coins < requiredResources[1]) {
        return res.status(404).json({ success: false, message: "Coins are less" });
      };
      user.resources.coins -= requiredResources[1];
    }

    if (requiredResources[2] === "d") {
      if (user?.resources?.diamonds < requiredResources[1]) {
        return res.status(404).json({ success: false, message: "Diamonds are less" });
      };
      user.resources.diamonds -= requiredResources[1];
    }

    user.buildings.castle.level += 1;
    user.power += requiredResources[3];
    const upgradedUser = await user.save();
    res.status(200).json({ success: true, message: "Castle upgraded successfully", data: upgradedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const upgradeTrain = async (req, res) => {
  const trainInfo = [
    [1, 50, "c", 25],
    [2, 100, "c", 50],
    [3, 150, "c", 250],
    [4, 200, "c", 500],
    [5, 250, "c", 800],
    [6, 300, "c", 1500],
    [7, 350, "c", 2500],
    [8, 400, "c", 5000],
    [9, 450, "c", 6000],
    [10, 500, "c", 10000],
    [11, 50, "d", 15000],
    [12, 100, "d", 18000],
    [13, 150, "d", 25000],
    [14, 200, "d", 30000],
    [15, 250, "d", 35000],
    [16, 300, "d", 40000],
    [17, 350, "d", 45000],
    [18, 400, "d", 50000],
    [19, 450, "d", 60000],
    [20, 500, "d", 75000],
    [21, 50000, "c", 850000],
    [22, 100000, "c", 950000],
    [23, 150000, "c", 100000],
    [24, 200000, "c", 110000],
    [25, 250000, "c", 130000],
    [26, 300000, "c", 150000],
    [27, 350000, "c", 180000],
    [28, 400000, "c", 200000],
    [29, 450000, "c", 300000],
    [30, 500000, "c", 330000],
    [31, 1000, "d", 400000],
    [32, 1100, "d", 450000],
    [33, 1200, "d", 500000],
    [34, 1300, "d", 560000],
    [35, 1400, "d", 610000],
    [36, 1500, "d", 700000],
    [37, 1600, "d", 770000],
    [38, 1700, "d", 800000],
    [39, 1800, "d", 900000],
    [40, 1900, "d", 1000000],
    [41, 600000, "c", 1100000],
    [42, 1200000, "c", 1200000],
    [43, 1500000, "c", 1300000],
    [44, 1800000, "c", 1400000],
    [45, 2000000, "c", 1500000],
    [46, 2300000, "c", 1600000],
    [47, 2500000, "c", 1700000],
    [48, 2800000, "c", 1800000],
    [49, 3000000, "c", 1900000],
    [50, 3300000, "c", 2000000],
  ];

  try {
    const user = await User.findOne({ _id: req?.user?.id });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const prevLevel = user?.buildings?.train?.level;
    const requiredResources = trainInfo[prevLevel];

    if (requiredResources[2] === "c") {
      if (user?.resources?.coins < requiredResources[1]) {
        return res.status(404).json({ success: false, message: "Coins are less" });
      };
      user.resources.coins -= requiredResources[1];
    }

    if (requiredResources[2] === "d") {
      if (user?.resources?.diamonds < requiredResources[1]) {
        return res.status(404).json({ success: false, message: "Diamonds are less" });
      };
      user.resources.diamonds -= requiredResources[1];
    }

    user.buildings.train.level += 1;
    user.power += requiredResources[3];
    const upgradedUser = await user.save();
    res.status(200).json({ success: true, message: "Train upgraded successfully", data: upgradedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const upgradeTech = async (req, res) => {
  const techInfo = [
    [1, 50, "c", 25],
    [2, 100, "c", 50],
    [3, 150, "c", 250],
    [4, 200, "c", 500],
    [5, 250, "c", 800],
    [6, 300, "c", 1500],
    [7, 350, "c", 2500],
    [8, 400, "c", 5000],
    [9, 450, "c", 6000],
    [10, 500, "c", 10000],
    [11, 50, "d", 15000],
    [12, 100, "d", 18000],
    [13, 150, "d", 25000],
    [14, 200, "d", 30000],
    [15, 250, "d", 35000],
    [16, 300, "d", 40000],
    [17, 350, "d", 45000],
    [18, 400, "d", 50000],
    [19, 450, "d", 60000],
    [20, 500, "d", 75000],
    [21, 50000, "c", 850000],
    [22, 100000, "c", 950000],
    [23, 150000, "c", 100000],
    [24, 200000, "c", 110000],
    [25, 250000, "c", 130000],
    [26, 300000, "c", 150000],
    [27, 350000, "c", 180000],
    [28, 400000, "c", 200000],
    [29, 450000, "c", 300000],
    [30, 500000, "c", 330000],
    [31, 1000, "d", 400000],
    [32, 1100, "d", 450000],
    [33, 1200, "d", 500000],
    [34, 1300, "d", 560000],
    [35, 1400, "d", 610000],
    [36, 1500, "d", 700000],
    [37, 1600, "d", 770000],
    [38, 1700, "d", 800000],
    [39, 1800, "d", 900000],
    [40, 1900, "d", 1000000],
    [41, 600000, "c", 1100000],
    [42, 1200000, "c", 1200000],
    [43, 1500000, "c", 1300000],
    [44, 1800000, "c", 1400000],
    [45, 2000000, "c", 1500000],
    [46, 2300000, "c", 1600000],
    [47, 2500000, "c", 1700000],
    [48, 2800000, "c", 1800000],
    [49, 3000000, "c", 1900000],
    [50, 3300000, "c", 2000000],
  ];

  try {
    const user = await User.findOne({ _id: req?.user?.id });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const prevLevel = user?.buildings?.tech?.level;
    const requiredResources = techInfo[prevLevel];

    if (requiredResources[2] === "c") {
      if (user?.resources?.coins < requiredResources[1]) {
        return res.status(404).json({ success: false, message: "Coins are less" });
      };
      user.resources.coins -= requiredResources[1];
    }

    if (requiredResources[2] === "d") {
      if (user?.resources?.diamonds < requiredResources[1]) {
        return res.status(404).json({ success: false, message: "Diamonds are less" });
      };
      user.resources.diamonds -= requiredResources[1];
    }

    user.buildings.tech.level += 1;
    user.power += requiredResources[3];
    const upgradedUser = await user.save();
    res.status(200).json({ success: true, message: "Tech upgraded successfully", data: upgradedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { signup, login, getRank, logout, upgradeCastle, upgradeTrain, upgradeTech };