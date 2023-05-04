import React, { useReducer } from 'react'

const UseReducer = () => {
const initialstate=0
const reducer = (state,action)=>{
  switch(action){
    case "Increment":
      return state+1;
    case "Decrement":
      return state-1;
    default:
      return state;

  }

}

   const[count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
    <div>Count: {count}</div><br/>
    <button onClick={()=>dispatch("Increment")}>Increment</button><br/>
    <button onClick={()=>dispatch("Decrement")}>Decrement</button>
      
    </div>
  )
}



export default UseReducer;
