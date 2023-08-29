
import React , { useContext} from 'react'
import {  useNavigate } from 'react-router-dom'
import { myContext } from '../context/Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
const Login = () => {
  const myNav=useNavigate()
const {state,setLogin}=useContext(myContext)
const adminemail='admin@gmail.com'
const adminpass='b'
const handleSubmit = (event) => {
  event.preventDefault();
  if(event.target.email.value==adminemail && event.target.pass.value==adminpass){
    myNav('/adminpage')
    setLogin(true)
  } else{
    const email=event.target.email.value
    const password=event.target.pass.value
  
    const val=state.filter((value)=>{
      return value.email===email
    })
  
  
    if(val[0].password===password){
      myNav('/')
      setLogin(a=>!a)
    }else{
      alert('please register')
      myNav('/login')
    }
  }

  ;
  }


  return (
    

    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" required id='email'/>
            <i className="fa fa-user"></i>
          </div>



          <div className="input-box">
            <input type="password" placeholder="Password" required id='pass'/>
            <i className="fa fa-lock"></i>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="/registration">register</a> </p>
          </div>
        </form>
      </div>
    </div>
  </div>

  )
}

export default Login





    
