import React from 'react';

function Containment(props){
  return(
    <>
    <div className='Containment'>
      <div className='Containment-left'>
      {props.left}
      </div>
      <div className='Containment-right'>
        {props.right}
      </div>
    </div>

    </>
  )
}

export default Containment;