import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import axios from 'axios';
import TextCards from "../components/TextCards";
import TaskColoumn from "../components/TaskColoumn";

const Home = () => {
  const [data, setData] = useState([]);
     const [activeCard,setActiveCard]=useState(null)
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/task');
      console.log(response, "response");
      setData(response?.data.task);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


const onDropp=(status,position)=>{
console.log(`${activeCard} is going to place ${status} at the position ${position}`)
}



return (
    <div className="w-full bg-gray-500 h-screen p-4">
      <div className="w-full flex justify-center h-20 items-center p-2">
        <input className="w-[500px] bg-gray-400 h-16 rounded-2xl mr-5" placeholder="Enter task..." />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl">Submit</button>
      </div>
      <h1>{activeCard}||"no"</h1>
      <div className="w-full flex h-full justify-evenly p-4">
       <TaskColoumn status={'task'}       task={data} setActiveCard={setActiveCard} onDropp={onDropp} />
       <TaskColoumn status={'pending'}    task={data} setActiveCard={setActiveCard} onDropp={onDropp}/>
       <TaskColoumn status={'completed'}  task={data} setActiveCard={setActiveCard} onDropp={onDropp}/>

      </div>
  
    </div>
  );
};

export default Home;
