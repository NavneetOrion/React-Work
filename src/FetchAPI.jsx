import React,{useEffect, useState} from "react";

const FetchAPI=(()=>{

  const [users,setuser]=useState([]);

  const getusers=async ()=>{
    const promise=await fetch('https://jsonplaceholder.typicode.com/users');
   
    setuser(await promise.json());
    
  }

    useEffect(()=>{
      getusers();
    },[])

    return (
        <>
        <div className="focus">
           <h1 > Github User's data </h1>
           {
            users.map((curEle)=>{
              return (
                <div>
                  <ol>{curEle.id}
                  <p><strong>Name:</strong>{ curEle.name } </p>
                  <span><strong>Username:</strong>{ curEle.username }</span>
                  <span><strong>Email:</strong>{ curEle.email }</span>
                  <span><strong>Address:</strong>{ curEle.address.city }</span>
                  </ol>
                </div>
              )
            })
           }
        </div>
        </>
    )
})

export default FetchAPI;