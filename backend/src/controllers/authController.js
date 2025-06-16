import User from "../models/User.js";
import Otp from "../models/OTP.js";
import transporter from "../config/mailer.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// 1️⃣ Send OTP
export const sendOtp = async (req, res) => {
  const { email } = req.body;
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
  await Otp.create({ email, otp: otpCode });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otpCode}. It expires in 5 minutes.`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to send OTP" });
    }
    res.json({ message: "OTP sent to email" });
  });
};

// 2️⃣ Verify OTP & Signup
export const signup = async (req, res) => {
  const { email, password, role, otp } = req.body;
  const validOtp = await Otp.findOne({ email, otp });
  if (!validOtp) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashedPassword, role });

  await Otp.deleteMany({ email }); // cleanup

  res.json({ message: "User registered successfully" });
};

// 3️⃣ Login
export const login = async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email, role });
  if (!user) {
    return res.status(400).json({ message: "User not found for this role" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token, role: user.role });
};
