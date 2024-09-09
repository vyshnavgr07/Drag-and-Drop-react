const express=require('express');
const morgan = require('morgan');
const cors=require('cors')
const mongoose=require('mongoose')
const Task=require('./model')
const app=express();
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/draganddrop')
.then(()=>console.log('db connected'))
.catch((err)=>console.log('error',err))



app.post("/task", async (req, res) => {
    try {
        console.log(req.body,"reqqqq")
      const data = req.body;
if (!data) {   
        return res.status(400).json({ message: "No data provided" });
      }
  const task = new Task({ ...data });
      await task.save();
   return res.status(201).json({ message: "Task created successfully", task });
      } catch (error) {
      console.log(error, "err");
     return res.status(500).json({ message: "An error occurred", error });
    }
  });
  

  app.get("/task", async (req, res) => {
    try {
const task =await Task.find();
return res.status(201).json({ message: "Task created successfully", task });
      } catch (error) {
      console.log(error, "err");
     return res.status(500).json({ message: "An error occurred", error });
    }
  });



  app.patch("/task", async (req, res) => {
    try {
     const {status,id}=req.body;
     console.log(status,id,"usuusuusuus")
     const updatedStatus=await Task.updateOne({_id:id},{$set:{status:status}})

return res.status(201).json({ message: "Task created successfully",updatedStatus });
      } catch (error) {
      console.log(error, "err");
     return res.status(500).json({ message: "An error occurred", error });
    }
  });







app.listen(3002,()=>{
    console.log('server is running on port 3002')
})