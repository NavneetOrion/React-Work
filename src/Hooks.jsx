import React, { useState } from 'react';
function Hooks(){
const [headingText,setHeadingText] = useState("Welcome");
const [name,setName] = useState("");
    function HandleEvent(){
        setName("");
        setHeadingText("Submitted");

    }
    function InputHandleEvent(event){
        setName(event.target.value);

    }

    function ResetAllThings()
    {
        document.getElementById("in-1").value="";
        setName("");
        setHeadingText("Welcome");
    }
    

    return(
        <>
        <div className='con1'>
        <h1>Forms with Hooks</h1>
            <h1>{headingText} {name}</h1>
            <input id="in-1" onChange={InputHandleEvent} type="text" placeholder="Enter your name"></input><br/><br/>
            <button onClick={ResetAllThings} type="reset" value="Reset">Reset</button>
            <button onClick={HandleEvent}>Submit</button>
            </div>
        </>
    )
}

export default Hooks;