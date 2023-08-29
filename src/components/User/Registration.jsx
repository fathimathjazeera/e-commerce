import React, { useContext } from "react";
import { useState } from "react";
import './registration.css'
import {useNavigate,Link} from 'react-router-dom'
import { myContext } from "../context/Context";

const Registration = () => {
  const nav=useNavigate()
  const {state,setState,setUserName}=useContext(myContext)
  const[focus,setFocus]=useState({
    errName:'false',
    errEmail:'false',
errPass:'false',
errcPass:'false'
  })


  
  const handleSubmit = (event) => {
    event.preventDefault();
    const email= event.target.email.value;
    const password = event.target.Password.value;
    const name= event.target.name.value
    setState([...state,{email:email,password:password,username:name}]);
    setUserName(name)

alert('you have successfully created account')
nav('/login')
  };
 
 

  return (
<div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 registration-form">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                type="text"
                className={`form-control `}
                id="name"
                name="username"
                placeholder="First and last name"
                required
                pattern="^[A-Za-z0-9].{2,16}"
                onBlur={() => setFocus({ ...focus, errName: true })}
                focus={focus.errName.toString()}
              />
             
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email ID
              </label>
              <input
                type="text"
                className={`form-control `}
                id="email"
                placeholder="Email ID"
                required
                onBlur={() => setFocus({ ...focus, errEmail: true })}
                focus={focus.errEmail.toString()}
              />
            
            
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control `}
                id="Password"
                placeholder="Password"
                pattern="a"
                required
                onBlur={() => setFocus({ ...focus, errPass: true })}
                focus={focus.errPass.toString()}
              />
              
            </div>

            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className={`form-control `}
                id="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
                required
                pattern={state.password} // This seems incorrect. You may need to fix this.
                onBlur={() => setFocus({ ...focus, errcPass: true })}
                focus={focus.errcPass.toString()}
              />
      
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/login">Already registered?</Link>
          </form>
        </div>
      </div>
    </div>
    

  );
};

export default Registration;



  






