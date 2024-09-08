import React, { useState } from 'react';

const DropAarea = ({onDropp}) => {
  const [show, setShow] = useState(false);

onDropp()

  return (
    <div 
      onDragEnter={() => setShow(true)} 
      onDragLeave={() => setShow(false)}
       onDrop={()=>{
        onDropp()
        setShow(false)
       }
       }
      onDragOver={e=>e.preventDefault()}
      className="relative w-full h-32 "
    >
      {show && (
        <section className="absolute inset-0 bg-blue-200 bg-opacity-75 border-4 border-dashed border-blue-500 flex items-center justify-center text-xl font-semibold text-blue-700 rounded-lg transition-opacity duration-300 ease-in-out">
          Drop Here
        </section>
      )}
    </div>
  );
};

export default DropAarea;
