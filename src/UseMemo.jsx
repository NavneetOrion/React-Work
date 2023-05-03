import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [add,setadd] = useState(0)
  const [sub,setsub] = useState(100)

  const Multiply = useMemo(function Multiply(){
    console.log('*****************')
    return add*5
  },[add])


  
  return (
    <div className='Memo'>
    <h1>Learning UseMemo</h1>

    <h3>Multiply:- {Multiply}</h3><br/>
    <button onClick={()=>setadd(add+1)}>Addition</button><br/>
    <span>{add}</span><br/>
    <button onClick={()=>setsub(sub-1)}>Subtraction</button><br/>
    <span>{sub}</span>
    </div>
  )
}

export default UseMemo;
