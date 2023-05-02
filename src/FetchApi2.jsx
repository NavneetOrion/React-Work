import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchApi2 = () => {
    const [mydata,setmyData]= useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setmyData(response.data)
            
        })
    },[]) 
  return (
    <div>
    {mydata.map((data)=>{
        return (
            <>
            <div>
            <h2>Data of API</h2>
            {data.body}
            </div>
            </>
        )
    })}
      
    </div>
  )
}

export default FetchApi2
