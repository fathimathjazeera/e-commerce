import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context/Context'
const Clothes = () => {
    const {allproducts}=useContext(myContext)

    const filteredArray = allproducts.filter((product)=>{
    
           return product.category==='cloth'     
        
    
    })
  return (
    <div>
{filteredArray.map((product)=>{
    return <div>
        <h1>{product.title}</h1>
   <img src={product.URL} alt="" />     
    </div>
})}
    </div>
  )
}

export default Clothes