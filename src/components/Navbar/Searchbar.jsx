
import React, { useContext, useState } from 'react';
import { Dropdown, Form ,Button} from 'react-bootstrap';
import { myContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
const Searchbar = () => {
    const { allproducts,addProduct } = useContext(myContext);

    const [searchTerm, setSearchTerm] = useState('');
const nav=useNavigate()



  return (


<div>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 search-inp"
        aria-label="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{color:"white"}} className='search-btn'>
          search
        </Dropdown.Toggle>
  
        <Dropdown.Menu >
          {allproducts
            .filter((val) => {
             if (searchTerm === '') {
                return allproducts
              } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((val) => {
              return (
                <Dropdown.Item key={val.id}  onClick={()=>{nav(`/ProductsDetails/${val.id}`)}} >
                  <div className="template"  >
                    <img src={val.URL} alt="" style={{width:'50px'}}/>
                    <h3>{val.title}</h3>
                    <p className="price">{val.category}</p>
                  </div>
                </Dropdown.Item>
              );
            })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    
  )
}


export default Searchbar







