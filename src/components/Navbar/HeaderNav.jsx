import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt ,FaShoppingCart} from "react-icons/fa";
import Searchbar from "./Searchbar";
import {React, useContext } from "react";
import { myContext } from "../context/Context";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeaderNav() {

  
  const {login,setLogin,setProduct,username}=useContext(myContext)
  const myNav = useNavigate();
const logout=()=>{
myNav('/login')
setLogin(a=>!a)
setProduct([])
}

  return (
    <div>
    
    <Navbar expand="lg" bg="body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link onClick={() => myNav('/')}>Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link >Testimonial</Nav.Link>
            <Nav.Link >Contact Us</Nav.Link>
            <Nav.Link  onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>

          <Searchbar />

          <Link to="/cart">
            <FaShoppingCart className="headar-icons" size={40} />
          </Link>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaUserAlt className="headar-icons" size={40} />
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

          <br />
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  
  </div>
  )
}

export default HeaderNav;










