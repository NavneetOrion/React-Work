import React from 'react';
function Tick(){
    return(
        <>
        <h2>Hi Welcome its Time!!</h2>
        <h2>Its {new Date().toLocaleTimeString()}</h2>

        </>
    )
}

setInterval(Tick,1000);

export default Tick;