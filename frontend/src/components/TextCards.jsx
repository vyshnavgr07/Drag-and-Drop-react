import React from 'react'
import './testcard.css'
const TextCards = ({title,content,index,setActiveCard}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border  border-gray-300 mt-2 transition-transform transform 
    hover:scale-105 hover:shadow-xl draggable-element active:opacity-5 active:border-2 active:border-black " draggable
     onDragStart={()=>setActiveCard(index)} onDragEnd={()=>setActiveCard(null)}>
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h2>
      <p className="text-gray-700 text-base">{content}</p>
    </div>
  )
}
     
export default TextCards