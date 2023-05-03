import React, { useRef } from 'react'

const UseRef2 = () => {
  let ref = useRef(0)
  function HandleClick(){
    ref.current =Number(ref.current +1); 
    alert("You clicked " + ref.current + " times");
  }
  return (
    <div>
    <button onClick={HandleClick}>Click Me!!</button>
      
    </div>
  )
}

export default UseRef2;
