import React from 'react';

function Access(){
    function clickFun(){
        alert("Welcome to Accessability!!")
    }
    return(
        <>
        <label htmlFor='name'>Enter your Name:</label>
        <input id="name" type="text" placeholder='Enter your Name' aria-label="Name" aria-required="true"/>
        <table style={{'border':'2px solid ' }}>
        <tbody>
            <tr >
                <td>My Column </td>
                <td>New Column</td>
            </tr>
            <tr>
                <td>Hello World</td>
                <td>Bye!!</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        <button onClick={clickFun}>Click Me!!+</button>
        </>
    )
}

export default Access;