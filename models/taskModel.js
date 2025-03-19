import mongoose from "mongoose";
import myDB from "./dbConnection.js";

const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: "Tilte is required",
    },
    description: {
      type: String,
      required: "Description is required",
    },
    owner_id: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Task = myDB.model("Task", TaskSchema);

export default Task;
