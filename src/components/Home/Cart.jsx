import React, { useContext, useState } from 'react'
import { myContext } from '../context/Context'
import Table from 'react-bootstrap/Table';
import Count from './Count';

const Cart = () => {
  const {newProduct,setProduct}= useContext(myContext)
 
var total=0
const [state,setState]=useState(0)
  const onDelete=(id)=>{
setProduct(newProduct.filter((product)=>{
 return product.id !==id
}))
  }
for (let x of newProduct){
  total=total+x.prize*x.qty
}
  return (
    <div>
      {newProduct.map((product)=>{
      return  <Table striped bordered hover key={product.id}>
    
      <tbody>
        <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><img src={product.image} alt="" style={{width:'50px'}}/> </td>
          <td>{product.category} </td>
          
         <Count obj={product} stat={setState} />
    
         <td> <button className='btn btn-success' onClick={()=>{onDelete(product.id)}}>Delete</button></td>
         
        </tr>
      </tbody>
    </Table>
      })}



  
<h5>Total Prize: {total}</h5>
    </div>
  )
}

export default Cart
