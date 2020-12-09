const mongoose = require("mongoose");
const validator = require("validator");

taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    completed: {
      default: false,
      type: Boolean,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  //this only available on schema
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);



module.exports = Task;
