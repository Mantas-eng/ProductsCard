const TaskModel = require("../models/task");

let tasks = [];

const GET_ALL_TASKS = (req, res) => {
  TaskModel.find().then((response) => {
    return res.json({ tasks: response });
  });
};

const GET_TASK_BY_ID = (req, res) => {
  TaskModel.findById(req.params.id).then((response) => {
    return res.json({ task: response });
  });
};

const ADD_TASK = (req, res) => {
  const task = new TaskModel({ title: req.body.title, isCompleted: false });

  task
    .save()
    .then((dbResponse) => {
      return res
        .status(201)
        .json({ response: "Task was added", task: dbResponse });
    })
    .catch((err) => {
      console.log("ERROR: ", err);
      res.status(500).json({ response: "something went wrong" });
    });
};

const UPDATE_TASK = (req, res) => {
  console.log(req.body);

  TaskModel.updateOne({ _id: req.params.id }, { ...req.body }).then(
    (response) => {
      return res
        .status(200)
        .json({ status: "Task was updated", response: response });
    }
  );
};

const DELETE_TASK = (req, res) => {
  const filteredTasks = tasks.filter((task) => task.id !== req.params.id);

  tasks = filteredTasks;

  return res.status(200).json({ tasks: tasks });
};

module.exports = {
  GET_ALL_TASKS,
  ADD_TASK,
  GET_TASK_BY_ID,
  UPDATE_TASK,
  DELETE_TASK,
};
