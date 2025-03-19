import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: 'Access denied' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) throw new Error();
    req.body.token = token;
    req.body.user = user;
    req.body.userId = decoded.userId;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ error: "Please authenticate" });
  }
};
export default auth;
