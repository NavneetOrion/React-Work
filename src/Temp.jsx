import React, { useState } from 'react';

function Temp(){
  const [temp,updateTemp] = useState({f:0,c:0})

  const updateC = event => updateTemp({
    c:event.target.value,
    f:(+event.target.value*9/5 + 32).toFixed(2)
  })

  const updateF = event =>updateTemp({
    c:((+event.target.value - 32)* 5 /9).toFixed(2),
    f:event.target.value
  })

  return(
    <>
    <div id="container">
      <div id="box1">
        <h1>Celsius</h1>
        <input type="number" value={temp.c} onChange={updateC}></input>
      </div>
      <div id="box2">
        <h1>Fahrenheit</h1>
        <input type="number" value={temp.f} onChange={updateF}></input>
      </div>
    </div>

    </>
  )
}
export default Temp;