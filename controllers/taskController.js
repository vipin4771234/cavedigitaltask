import Task from "../models/taskModel.js";

export const addTask = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const task = new Task({
      title: title,
      description: description,
      owner_id: userId,
    });
    task.save();
    res.status(201).send({
      success: true,
      task: task,
      message: "Task created successfully",
    });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

export const getTasks = async (req, res) => {
    try {
      const { userId } = req.body;
      const task = await Task.find({
        owner_id: userId,
      });
      res.status(200).send({
        success: true,
        task: task,
        message: "Task fetched successfully",
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  export const getTaskById = async (req, res) => {
    try {
      const { taskId } = req.params;
      const task = await Task.findById(taskId);
      res.status(200).send({
        success: true,
        task: task,
        message: "Task fetched successfully",
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  export const updateTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      const { title, description } = req.body;
      const task = await Task.findByIdAndUpdate(taskId,{
        $set: {title: title, description: description}
      });
      res.status(201).send({
        success: true,
        task: task,
        message: "Task Updated successfully",
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  export const deleteTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      const { title, description } = req.body;
      const task = await Task.findByIdAndDelete(taskId);
      res.status(200).send({
        success: true,
        task: task,
        message: "Task Deleted successfully",
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
