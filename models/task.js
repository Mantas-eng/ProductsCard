const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  isCompleted: { type: Boolean, required: true },
  title: { type: String, required: true },
});

module.exports = mongoose.model("Task", taskSchema);
