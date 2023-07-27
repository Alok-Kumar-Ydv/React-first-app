import React,{useState} from 'react'

export default function Hooks_basic() {
    const [count,setCount]=useState(10)
  return (
    <div>
      <h1>Hooks for functional component {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}



