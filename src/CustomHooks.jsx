import React from 'react'
import useCounter from './useCounter'

const CustomHooks = () => {
  const [count,Increment,Decrement] = useCounter()
  return (
    <div className='custom'>
    <h1>Value: {count}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
      
    </div>
  )
}

export default CustomHooks
