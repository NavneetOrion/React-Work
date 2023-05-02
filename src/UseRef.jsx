//Learning UseRef Hook
// Used for DOM Manipulation
import React, { useRef, useState } from 'react'

const UseRef = () => {
  const RefElement = useRef("");
  const [name,setName] = useState("Navneet")

 console.log(RefElement);
  function Reset(){
    setName("");
    RefElement.current.focus()
    
  }
  function HandleClick(){
    RefElement.current.style.color="blue"
  }
  return (
    <div>
      
      <strong><input ref = {RefElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}/></strong>
      <button onClick={Reset}>Reset</button>
      <button onClick={HandleClick}>Click Me!!</button>
    </div>
  )
}

export default UseRef;
