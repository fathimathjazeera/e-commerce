import React, { useContext } from 'react'
import { myContext } from '../context/Context'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './update.css'

const Update = () => {
    const {allproducts,setAllProducts}=useContext(myContext)
    const {id}=useParams()
const newId=id
    const onSubmit=(event)=>{
        event.preventDefault()
        const updatedProducts=allproducts.map((product)=>{
          const newTitle=event.target.title.value || product.title
          const newName=event.target.name.value || product.name 
          const newCategory=event.target.category.value || product.category
const newImage= event.target.image.value || product.URL

          if(product.id == id){
          return {...product,title:newTitle , name:newName, category:newCategory}
          }else{
            return product
          }
        })
 setAllProducts(updatedProducts)

    }

const filtered=allproducts.filter((product)=>{




  return product.id ==newId
}) 
   console.log(filtered);


  return (
  
   <div className="product-container">
      <div className="product-images">
        {filtered.map((val) => (
          <div key={val.id}>
            <img src={val.URL} alt="img" style={{ width: '60px' }} />
          </div>
        ))}
      </div>
      <form action="" onSubmit={onSubmit} className="product-form">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="category">Category</label>
        <input type="text" id="category" />
        <label htmlFor="image">Image URL</label>
        <input type="text" id="image" />
        <button type="submit">Submit</button>
      </form>
    </div>





   
  )
}
export default Update







   
