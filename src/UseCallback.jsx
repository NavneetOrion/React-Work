import React, { useCallback, useState } from 'react'
import NewChild from './NewChild';

const UseCallback = () => {
  const[value,setValue] = useState(0);
  
  const Learning = useCallback(()=>{
// Callback function
  },[value])

  return (
    <div classname="usecallback">
    <h2>Value: {value}</h2>
    <NewChild Learning={Learning} />
    <button onClick={()=>setValue(value+1)}>Addition</button>
    
      
    </div>
  )
}

export default UseCallback;
