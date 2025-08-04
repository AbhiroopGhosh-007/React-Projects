//Concepts covered: 1. React Hooks (useState, useEffect)
//2. Conditional Rendering
//3. Event Handling
//4.Hide and Show buttons based on count
//5. Dynamic Document Title

import React, { useState,useEffect } from 'react';
function App() {
   
    let [count, setCount] = useState(0);
    useEffect(() => {
     document.title=`Clicked : ${count}`
    }, [count])
    
    return (
    <div className='flex flex-col items-center justify-center gap-4 h-screen bg-gray-100'>
    <h1 className='text-2xl font-bold my-4'>Day 3 Project:Counter</h1>
    <p>Count:{count}</p>
    <button onClick={()=>{setCount(count+1)}} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>Increment</button>
    {count!=0 && (<button onClick={
      ()=>{setCount(count-1)}} className='px-4 py-2 bg-red-500  text-white rounded hover:bg-red-600 transition'>Decrement</button>)}

    <button onClick={()=>{setCount(0)}} className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition'>Reset</button>

   </div>

  )
}

export default App
