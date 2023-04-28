import React, { useEffect, useState } from 'react'

const UseEffect4 = () => {
    const [windowcount,setWindowcount]  = useState(window.screen.width)
    function ActualWidth(){
        setWindowcount(window.innerWidth);
    }
    useEffect(()=>{
       
        window.addEventListener("resize",ActualWidth);
    })
  return (
    <div>
    <p>The actual size of window is </p>
    <h2>{windowcount}</h2>
    </div>
  )
}

export default UseEffect4
