import React, { useCallback, useState } from 'react'
import NewChild from './NewChild';

const UseCallback = () => {
  const[value,setValue] = useState(0);
  const[count,setCount] = useState(0);   
  const Learning = useCallback(()=>{
// Callback function
  },[])

  return (
    <div classname="usecallback">
    <h2>Value: {value}</h2>
    <h2>Count: {count}</h2>
    <NewChild Learning={Learning} />
    <button onClick={()=>setCount(count+5)}>Count</button>
    <button onClick={()=>setValue(value+1)}>Addition</button>
    
      
    </div>
  )
}

export default UseCallback;
