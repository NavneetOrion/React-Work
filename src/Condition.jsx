import React from 'react';
import Blue from './Blue';
import Green from './Green';


function Condition(){
    let color;
    let isColor=true;
    if(isColor){
        color = <Blue/>
    }
    else
    {
        color =<Green/>
    }
    return(
        <>
        {color}
        </>
    )
}

export default Condition;