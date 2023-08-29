import React, { useContext } from 'react'
import { myContext } from '../context/Context'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
const Products = () => {
    const {allproducts,setAllProducts}=useContext(myContext)
    const onDelete=(id)=>{
setAllProducts(allproducts.filter((product)=>{
    return product.id !=id

}))
    }
    
    const nav=useNavigate()
    const onUpdate=(id)=>{
  nav(`/update/${id}`)
    }
  return (
    <div>
      <div className='mt-2'> 
      <button className='btn btn-success' onClick={()=>{nav('/addproducts')}}>Add Products</button>
      </div>
     
        {allproducts.map((val)=>{
           return  <Table striped bordered hover>
    
             <tbody>
               <tr>
               <td>{val.id}</td>
                 <td>{val.name}</td>
                 <td>{val.title}</td>
                 <td><img src={val.URL} alt="" style={{width:'50px'}}/> </td>
                 <td>{val.category} </td>
                 <td> <button onClick={()=>{onUpdate(val.id)}}>Update</button> </td>
              <td><button onClick={()=>{onDelete(val.id)}}>Delete</button></td>
               </tr>
             </tbody>
           </Table>
        })}
       
    </div>
  )
}

export default Products


