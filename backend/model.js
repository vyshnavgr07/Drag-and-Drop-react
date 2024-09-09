const mongoose=require('mongoose');




const taskSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,  
      trim: true      
    },
    content: {
      type: String,
      required: true  
    },
    status: {
      type: String,
      enum: ["task","inProgress","done"], 
      default: "task"
    }
  }, {
    timestamps: true 
  });


const Task=mongoose.model("Task",taskSchema)


module.exports=Task;