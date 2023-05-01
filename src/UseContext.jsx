import React, { createContext } from 'react'
import ChildA from './ChildA'

const data = createContext();
const data1 = createContext();



const UseContext = () => {
    const name="Navneet";
    const gender = "Male";
  return (
    <div>
<data.Provider value={name}>
<data1.Provider value={gender}>
    <ChildA/>

</data1.Provider>
</data.Provider>
      
    </div>
  )
}

export default UseContext;
export {data,data1}
