import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 10);
    if (user) {
      res
        .status(200)
        .send({ success: false, user: user, message: "User already exist" });
    } else {
      const user = new User({name: name, email: email, password: hashedPassword });
      await user.save();
      res.status(201).send({
        success: true,
        user: user,
        message: "User created successfully",
      });
    }
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};
