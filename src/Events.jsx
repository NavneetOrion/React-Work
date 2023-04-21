import React from 'react';

function Events(){
    function HandledEvents(){
        alert("Hi This is an event!!");
    }
    return(
        <>
        <h2><br></br></h2>
        <button onClick={HandledEvents}>Click Me</button>

        </>
    )
}

export default Events;