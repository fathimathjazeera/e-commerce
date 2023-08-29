import React from 'react'
import { useNavigate } from 'react-router-dom'
const Categories = () => {
  
    const nav=useNavigate()
    const handleClick=()=>{
nav('/FilteredCategories')
    }

  return (
    
    <div className="container">
        <div className="row mt-5">

        <div className="col-4" onClick={handleClick}>
            <img src="https://i.pinimg.com/564x/20/22/ed/2022ed0f19d8836f7a7d10f3be60c9ab.jpg" alt=""style={{width:'20rem', height:'25rem'}}/> <h1>Toys</h1>
        </div>
        <div className="col-4" onClick={()=>{nav('/clothes')}}>
        <img src="https://i.pinimg.com/736x/7d/b8/d2/7db8d28f919cce1d8a13ac18a15d6bfb.jpg" alt=""  style={{width:'20rem', height:'25rem'}} /> <h1>Clothes</h1>
        </div>
        <div className="col-4" onClick={()=>{nav('/nutrition')}}>
        <img src="https://i.pinimg.com/564x/91/7b/d3/917bd39505d60f44b4b5e677e474792e.jpg" alt=""  style={{width:'20rem', height:'25rem'}} className='ml-5'/> <h1>Nutrition</h1>
        </div>
    </div>
    </div>

  )
}


export default Categories