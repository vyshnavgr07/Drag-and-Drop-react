import React from 'react'
import TextCards from './TextCards'
import Heading from './Heading'
import DropAarea from './DropAarea'


const TaskColoumn = ({task,status,setActiveCard,onDropp}) => {
return (
    <div className="w-1/4 border-4 border-red-800 h-4/5 overflow-y-auto">
          <Heading value={status} />
          <DropAarea onDropp={()=>onDrop(status,0)}  />
          {task?.filter(task => task.status ===status) 
                .map((task, index) => (
                    <div key={index}>
                    <TextCards key={index} 
                    title={task.title}
                     content={task.content} 
                     setActiveCard={setActiveCard}
                     index={index} />
                     
                  <DropAarea onDropp={()=>onDropp()} status={status} index={index}  />
                  </div>
                )
            )}
        </div>
  )
}

export default TaskColoumn