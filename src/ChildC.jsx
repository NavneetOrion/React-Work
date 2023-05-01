import React, { useContext } from 'react'
import {data,data1} from './UseContext.jsx'
const ChildC = () => {
    const name = useContext(data);
    const gender = useContext(data1);
    console.log(name);
  return (
    <div>
      <h1>Hi My Name is {name} Welcome to ReactJS</h1>
      <h2>Your gender is {gender}</h2>
    </div>
  )
}

export default ChildC
