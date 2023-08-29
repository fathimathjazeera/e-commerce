import { Route,Routes } from 'react-router-dom';
import {products }from './components/Home/Products'
import { myContext } from './components/context/Context'
import Homepage from './components/Home/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/User/Login';
import ProductDetails from './components/Home/ProductDetails';
import Registration from './components/User/Registration'
import Cart from './components/Home/Cart';
import { useState } from 'react';
import FilteredCategories from './components/Home/FilteredCategories';
import Clothes from './components/Home/Clothes';
import Nutririon from './components/Home/Nutririon';
import Admin from './components/Admin/Admin';
import User from './components/Admin/User';
import Products from './components/Admin/Products';
import Update from './components/Admin/Update';
import AddProducts from './components/Admin/AddProducts';
function App() {
  const [allproducts,setAllProducts]=useState(products)
 const [state,setState]=useState([])
const [login,setLogin]=useState(false)
 const [newProduct,setProduct]=useState([])
 const [username,setUserName]=useState([])
 const [update,setUpdate]=useState([])
const addProduct=(addedProduct)=>{
setProduct([...newProduct,addedProduct])
}

  return (
    <div>
<myContext.Provider value={{allproducts,setAllProducts,state,setState,addProduct,newProduct,setProduct,login,setLogin,username,setUserName,update,setUpdate}}>
 <Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/registration' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/FilteredCategories' element={<FilteredCategories/>}/>
  <Route path='/clothes' element={<Clothes/>}/>
  <Route path='/nutrition' element={<Nutririon/>}/>
  <Route path='/adminpage'  element={login==true ? <Admin/> : <Login />} />
  <Route path='/user' element={<User/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/update/:id' element={<Update/>}/>
  <Route path='/addproducts' element={<AddProducts/>}/>
</Routes>
</myContext.Provider>
    </div>
  );
}

export default App;
