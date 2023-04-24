import React, { useState } from "react";


function Forms(){
    const [name,setName] = useState("");
    const [fullName,setfullName] = useState("");
    const[mobile,setMobile] = useState("");
    const[fullmobile,setfullmobile] = useState("");
    const[feedback,setfeedback] = useState("");
    const[fullfeedback,setfullfeedback] = useState("");
    const[course,setcourse] = useState("");
    const[fullcourse,setfullcourse]=useState("");


    function NameEvent(event){
        event.preventDefault();
        setName(event.target.value);
    }
    function MobileEvent(event){
        event.preventDefault();
        setMobile(event.target.value);
    }
    
    function Feedback(e){
        e.preventDefault();
        setfeedback(e.target.value)
        
    }

    function Courses(e){
        e.preventDefault();
        setcourse(e.target.value);
    }

    function FinalClickEvent(){
        
        setfullName(name);
        setfullmobile(mobile);
        setfullfeedback(feedback);
        setfullcourse(course);

    }

   

    


    return(
        <>
        <div className="Forms101">
        <h2>Registration Forms:-</h2><br/><br/>
        <form>
            <strong><label for name="Name">Enter your Name:</label></strong><br/><br/>
            <input type="text" name="text" onChange={NameEvent} placeholder="Enter your Name"></input>
            <br/><br/>
            <strong><label for name="Mobile Number">Enter your Mobile No:</label></strong><br/><br/>
            <input type="text " name="text" onChange = {MobileEvent}placeholder="Enter your Mobile Number"></input>
            <br/>
            <br/>
            <strong><label for name="feedback">Submit your Feedback:</label></strong><br/><br/>
            <textarea rows={6} cols={35} onChange={Feedback} placeholder="Write your Feedback"></textarea>
            <br/>
            <br/>
            <strong><label for name="Choose">Choose your courses:</label></strong><br/><br/>
            <select onChange={Courses} value={course}>
                <option  value="CyberSecurity">CyberSecurity</option>
                <option value="Data Science">Data Science</option>
                <option value="IT Analyst">IT Analyst</option>
            </select>
            <br/>
            <br/>
            <button type="button" onClick={FinalClickEvent} >Submit</button>
        </form>
        </div>

        <div class="component1">
        <h1>Your Info</h1>
        <h2>Name: {fullName}</h2>
        <h2>Mobile: {fullmobile}</h2>
        <h2>Feedback: {fullfeedback}</h2>
        <h2>Course: {fullcourse}</h2>
        </div>
      
        

        </>
    )
}

export default Forms;
