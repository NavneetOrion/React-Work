import React, { useState } from 'react';
import AnotherButton from './AnotherButton';

function Counter(){
    const [count,setCount] = useState(0);
    const [counter,setCounter]=useState(0);
   
    function HandleClick(){
        setCount(count + 1);
    }

    function AnotherClick(){
        setCounter(counter + 1)
    }

    return(
        <>
        
        <div className='Counter'>
        <h2>Counters that Update Seperately:-</h2>
            <button type="button" onClick={HandleClick}>Clicked {count} times</button><br/>
            <button type="button" onClick={AnotherClick}>Clicked {counter} times</button><br/>

        <h2>Counters that Update Together:-</h2><br/>
        <AnotherButton />
        
        </div>

        </>
    )
}

export default Counter;