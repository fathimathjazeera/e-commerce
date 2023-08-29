import React, { useContext } from "react";
import { myContext } from "../context/Context";
import Card from "react-bootstrap/Card";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";
import './homepage.css'
import Contact from "./Contact";
import Footer from "./Footer";
import EcommerceNavbar from "../Navbar/EcommerceNavbar";

const Homepage = () => {
  const { allproducts} = useContext(myContext);
  const nav = useNavigate();
  return (
    <>
<EcommerceNavbar />
 
      <section className="home" id="home">
<div className="content">
  <h3 style={{color:'rgb(37, 36, 36)'}}> Explore Baby <br /> Products</h3>
          <button className="shop-btn">Shop Now</button>
</div> 
  </section>
     


      <Categories />
      <div className="about" id="about">
<h1 className="heading">about  us </h1>
<div className="row">
  <div className="video-container">
    <video src="./production_id_4811927 (720p).mp4" loop autoPlay muted></video>
  </div>
  <div className="content">
    <h3>why choose us?</h3>
    <button className="learn-more">Learn More</button>
  </div>
</div>
      </div>

    

      <section className="products" id="products">
        <h1 className="heading">products</h1>
        <div className="container mt-5">
        <div className="row">
          {allproducts.map((product, index) => {
            return (
              <div
                className="col-3"
                key={index}
              >
                <Card style={{ width: "15rem" }}   onClick={() => {
                  nav(`/ProductDetails/${product.id}`);
                }}>
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
              </div>
            );
          })}
        </div>
      </div>
       
      </section>
     <section className="review" id="review">
      <h1 className="heading">customer's review</h1>
      <div className="box-container">

     
      <div className="box">
        <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        </div>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae numquam delectus est vitae ipsam accusamus quas. A doloremque perspiciatis impedit adipisci eveniet tempora, tenetur minus minima cum, consectetur, enim eos?</p>
<div className="user">
  <img src="" alt="" />
  <div className="user-info">
    <h3>john deo</h3>
    <p>happy customer</p>
  </div>
</div>
<i className="fas fa-qoute-right"></i>
      </div>
      <div className="box">
        <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        </div>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae numquam delectus est vitae ipsam accusamus quas. A doloremque perspiciatis impedit adipisci eveniet tempora, tenetur minus minima cum, consectetur, enim eos?</p>
<div className="user">
  <img src="" alt="" />
  <div className="user-info">
    <h3>john deo</h3>
    <p>happy customer</p>
  </div>
</div>
<i className="fas fa-qoute-right"></i>
      </div>
      <div className="box">
        <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        </div>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae numquam delectus est vitae ipsam accusamus quas. A doloremque perspiciatis impedit adipisci eveniet tempora, tenetur minus minima cum, consectetur, enim eos?</p>
<div className="user">
  <img src="" alt="" />
  <div className="user-info">
    <h3>john deo</h3>
    <p>happy customer</p>
  </div>
</div>
<i className="fas fa-qoute-right"></i>
      </div>
      <div className="box">
        <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        </div>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae numquam delectus est vitae ipsam accusamus quas. A doloremque perspiciatis impedit adipisci eveniet tempora, tenetur minus minima cum, consectetur, enim eos?</p>
<div className="user">
  <img src="" alt="" />
  <div className="user-info">
    <h3>john deo</h3>
    <p>happy customer</p>
  </div>
</div>
<i className="fas fa-qoute-right"></i>
      </div>
      </div>
     </section>
     
     <Contact />
     <Footer />
    </>
  );
};

export default Homepage;