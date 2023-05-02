import React, { useEffect, useState } from 'react';

function UseEffect3(){
    const [count,setCount] = useState(0)
    const[statement,setStatement] =  useState(0)

        useEffect(()=>{
            setStatement(count * 5);

        },[count])

    return (
        <>
        <div className='dependencies'>
        <br/>
        <h2>React Hooks Evaluator</h2>
        <br/>
        <h2>Simple useState counter {count} </h2><br/><br/>
            <button onClick={()=>setCount(count +1)}>Click Me</button>
            <br/><br/>
        <h2>UseEffect Counter {statement}</h2>
        </div>

        </>
    )
}

export default UseEffect3; 