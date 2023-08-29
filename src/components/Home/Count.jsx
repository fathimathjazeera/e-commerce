import React from 'react'
import { useState } from 'react'
const Count = (props) => {
  
    const [count,setCount]=useState(props.obj.qty)
 
const increment=()=>{
    setCount(count+1) 
    props.obj.qty=count+1
    props.stat(p=>p+1)
}
const decrement=()=>{
    if(count>0){
        setCount(count-1)
        props.obj.qty=count-1
        props.stat(p=>p-1)
    }
}

  return (
    <div>
         Quantity : <br /> <button onClick={increment}>+</button>  
        {count}  
          <button onClick={decrement}>-</button>
          <p>Prize:{props.obj.prize*props.obj.qty}</p> 
        
    </div>
  )
}

export default Count
