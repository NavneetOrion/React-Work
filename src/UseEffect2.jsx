import React, { useState ,useEffect} from 'react';


function UseEffect2(){
    const [num,setNum] = useState(0)

    useEffect(()=>{
        alert("Button Clicked!!");
    })
    return(
        <>
        <div className='useeffectdiv'>
        <br/>
        <h2>UseEffect Hook</h2><br/>
        <button onClick={()=> setNum(num + 1)}>Clicked {num} time(s)!!!</button>
        </div>

        </>
    )
}

export default UseEffect2;