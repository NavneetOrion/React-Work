import React, { useState } from 'react';
function AnotherButton(){
  const [updated,setUpdated]=useState(0)

  function HandleClick(){
    setUpdated(updated + 1)
  }

  return(<>
  <div>
    <button onClick = {HandleClick}>Clicked {updated} times</button><br/>
    <button onClick = {HandleClick}>Clicked {updated} times</button><br/>
  </div>

  </>)
}

export default AnotherButton;