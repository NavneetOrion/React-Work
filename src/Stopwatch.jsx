import React, { useRef, useState } from 'react'

const Stopwatch = () => {
  const[starttime,setstartTime] = useState(null)
  const[now,setNow] = useState(null)
  const refInterval = useRef(null)

  function HandleStart(){
    setstartTime(Date.now())
    setNow(Date.now())

    //  clearInterval(refInterval.current);
    refInterval.current = setInterval(()=>{
      setNow(Date.now())
    },10);
  }

  function HandleStop(){
    clearInterval(refInterval.current);
  }

  let secondspassed = 0;
  if(starttime!=null && now!=null)
  {
    secondspassed=(now-starttime)/ 1000;
  }

  return (
    <div className='watch'>
    <h1>Time passed: {secondspassed.toFixed(3)}</h1>
    <br/><br/>
    <button onClick={HandleStart}>Start</button>
    <button onClick={HandleStop}>Stop</button>
      
    </div>
  )
}

export default Stopwatch;
