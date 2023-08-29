import React, { useContext } from 'react'
import { myContext } from '../context/Context'
import Card from "react-bootstrap/Card";


const FilterdCategories = () => {
    const {allproducts}=useContext(myContext)

const filteredArray = allproducts.filter((product)=>{

       return product.category==='toys'     
    

})



return (
    <div>
{filteredArray.map((product)=>{
    return <div className="container d-flex">
       
    <Card style={{ width: "15rem" }}>
    <Card.Img
      variant="top"
      src={product.URL}
      style={{ height: "18rem" }}
    />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.category}</Card.Text>
      
    </Card.Body>
  </Card>






  <div>
      
    </div>
  </div>
    

})}
    </div>
)
  
}

export default FilterdCategories;



 

