import React , { useContext } from 'react'
import { myContext } from '../context/Context'
const Nutririon = () => {
    const {allproducts}=useContext(myContext)

    const filteredArray = allproducts.filter((product)=>{
    
           return product.category==='nutrition'     
        
    
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

export default Nutririon