import express from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js"

const router = express.Router();

// use routes
router.use("/user", userRoutes);
router.use("/task", taskRoutes);

// Also listen to /api for backwards compatibility
router.use("/api/user", userRoutes);
router.use("/api/task", taskRoutes);

router.get("/", (req, res) => {
  res.send("Welcome to CaveTask");
});

export default router;
