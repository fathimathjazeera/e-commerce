import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
const nav=useNavigate()
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link onClick={()=>{nav('/user')}}>Userdetails</Nav.Link>
      <Nav.Link onClick={()=>{nav('/products')}}>Products</Nav.Link>
    </Nav>
       
    </div>
  )
}

export default Admin

