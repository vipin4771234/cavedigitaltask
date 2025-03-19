import express from "express";
import { addTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/taskController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/tasks", auth, addTask);
router.get("/tasks", auth, getTasks);
router.get("/tasks/:taskId", auth, getTaskById);
router.put("/tasks/:taskId", auth, updateTask);
router.delete("/tasks/:taskId", auth, deleteTask);

export default router;