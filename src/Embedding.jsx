import React from 'react';

function Embedding(){
    const names = {
        firstName:"Navneet",
        lastName:"Kumar"
    }

    function Hello(){
        return "Hello " + names.firstName + " " + names.lastName
    }
    return (
        <>
        <h1 className='embedding'>{Hello()}  Welcome to React</h1>

        </>
    )
}

export default Embedding;