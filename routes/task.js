const express = require("express");
const router = express.Router();
const {
  GET_ALL_TASKS,
  ADD_TASK,
  GET_TASK_BY_ID,
  UPDATE_TASK,
  DELETE_TASK,
} = require("../controller/task");

router.get("/tasks", GET_ALL_TASKS);

router.get("/tasks/:useId", GET_TASK_BY_ID);

router.post("/tasks", ADD_TASK);

router.put("/tasks/:id", UPDATE_TASK);

router.delete("/tasks/:id", DELETE_TASK);



module.exports = router;
