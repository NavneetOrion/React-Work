import React, { useState } from "react";


function NewForm(){
    const [name,setName] = useState("");
    
    const[mobile,setMobile] = useState("");
   
    const[feedback,setfeedback] = useState("");
 
    const[course,setcourse] = useState("");
  

    const [allEntry,setallEntry]=useState([]);
    function NameEvent(event){
       
        setName(event.target.value);
    }
    function MobileEvent(event){
        
        setMobile(event.target.value);
    }
    
    function Feedback(e){
       
        setfeedback(e.target.value)
        
    }

    function Courses(e){
        
        setcourse(e.target.value);
    }

    function FinalClickEvent(e){
        e.preventDefault();
        const newentry = {name:name,mobile:mobile,feedback:feedback,course:course};

        setallEntry([...allEntry,newentry]);
        

    }

   

    


    return(
        <>
        <div className="Forms102">
        <h2>Registration Form:-</h2><br/><br/>
        <form onSubmit={FinalClickEvent}>
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
            <button type="Submit" >Submit</button>
        </form>
        </div>
        <div>
            {
                allEntry.map((prop)=>{
                    return(
                        <>
                            <div className="another123">
                            <p><strong>Name:</strong>{prop.name}</p>
                            <p><strong>Mobile:</strong>{prop.mobile}</p>
                            <p><strong>feedback:</strong>{prop.feedback}</p>
                            <p><strong>Course:</strong>{prop.course}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>

       
      
        

        </>
    )
}

export default NewForm;
