import React, { useContext } from 'react'
import { myContext } from '../context/Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import './addproducts.css'
const AddProducts = () => {
    const {allproducts,setAllProducts}=useContext(myContext)
    const onSubmit=(event)=>{
event.preventDefault()


    const newTitle=event.target.title.value
    const newName=event.target.name.value
    const newCategory=event.target.category.value
    const newImage=event.target.image.value

setAllProducts([...allproducts,{name:newName,category:newCategory,URL:newImage,title:newTitle}])

    }
  return (


    <div className="custom-product-form-container">
      <form action="" onSubmit={onSubmit} className="custom-product-form">
        <div className="custom-form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className="custom-form-control" />
        </div>
        <div className="custom-form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="custom-form-control" />
        </div>
        <div className="custom-form-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" className="custom-form-control" />
        </div>
        <div className="custom-form-group">
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" className="custom-form-control" />
        </div>
        <button type="submit" className="custom-submit-button">
          Submit
        </button>
      </form>
    </div>
  )
}




export default AddProducts;







