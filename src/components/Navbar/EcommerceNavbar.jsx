import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart , FaUserAlt} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../context/Context';
import Dropdown from 'react-bootstrap/Dropdown';
import Searchbar from './Searchbar';
import './navbar.css'
const EcommerceNavbar = () => {
  const { allproducts,addProduct } = useContext(myContext);

  const [searchTerm, setSearchTerm] = useState('');



  const {login,setLogin,setProduct,username}=useContext(myContext)
  const myNav = useNavigate();
const logout=()=>{

setLogin(a=>!a)
setProduct([])
}
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='navbar-dark'>
      <Container>
   

        {/* Navbar Toggler */}
        <Navbar.Toggle aria-controls="navbarCollapse" />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="mr-auto nav-dark">
            <Nav.Link onClick={() => myNav('/')}>Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link  onClick={logout}></Nav.Link>
          </Nav>

        
           <Searchbar/>



          {/* Shopping Cart */}
          <Nav>
            <Nav.Link href="/cart">
              <FaShoppingCart size={20} className='shop-cart'/>
            </Nav.Link>
          </Nav>




          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className='user-tab'>
              <FaUserAlt className="headar-icons user-navbar" size={20} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {login === true ? 
                <div>
                  <Dropdown.Item>{username}</Dropdown.Item>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </div>
               : 
                <Dropdown.Item onClick={() => myNav('/registration')}>Sign Up</Dropdown.Item>
              }
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EcommerceNavbar;
