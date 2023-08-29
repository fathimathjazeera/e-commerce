import React, { useContext, useState } from "react";
import { myContext } from "../context/Context";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import EcommerceNavbar from "../Navbar/EcommerceNavbar";

const ProductDetails = () => {
  const { id } = useParams();
  const { allproducts,addProduct,newProduct,login } = useContext(myContext);

const nav=useNavigate()
  const filtered = allproducts.filter((product) => {
    return product.id == id;
  });

 const addCart=(product)=>{
if(login==true){


if(newProduct.find((item)=> item.id===product.id)){
  nav('/cart')
}else{
  addProduct({
                          
    id: product.id,
    title: product.title,
    category: product.category,
    image: product.URL,
    qty:product.qty,
    prize:product.prize
  });
  nav('/cart')
}

 }else{
  alert('please login')
  nav('/login')
 }
}
  return (
    <div>
   <EcommerceNavbar />
      {filtered.map((product) => {
        return (
          <div key={product.id} className="mt-3">
           <Card style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src={product.URL}
                    style={{ height: "18rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {


                        addCart(product)
                       




                      }}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
          </div>
        );
      })}


      











    </div>
  );
};

export default ProductDetails;









    