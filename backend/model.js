const mongoose=require('mongoose');




const taskSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,  // Title is required
      trim: true       // Trims whitespace from the title
    },
    content: {
      type: String,
      required: true    // Content is required
    },
    status: {
      type: String,
      enum: ["task", "inProgress", "done"], // Only allowed values for status
      default: "task"
    }
  }, {
    timestamps: true  // Automatically adds createdAt and updatedAt fields
  });


const Task=mongoose.model("Task",taskSchema)


module.exports=Task;