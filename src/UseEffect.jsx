import React, { useEffect, useState } from 'react';
function UseEffect(){
    const[count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })
    return(
        <>
       <div>
        <button onClick={()=>setCount(count +1)}>Click To Know</button>
       </div>
        
        </>
    )
}

export default UseEffect;