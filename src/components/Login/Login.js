import React from 'react'
import './Login.css'
import logo1 from '../Assets/image.png'
import object from '../Assets/Group 20.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
  return (
    <div className='container-fluid login'>
      <div className='row loginm'>
        <div className='col-md-5 col-sm-5 loginlogo'>
          <img src={logo1} className='logomain'/>
          <img src={object} className='object'/>
        </div>
        <div className='col-md-5 col-sm-5 logincard'>
             <h1>Login</h1>
             <h6>New User?<span style={{color:"#54BD95",cursor:"pointer"}} onClick={()=>navigate('/signup')}>Create an Acoount</span></h6>
          
  <div className="mt-6 mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control inputl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email'/>
    
  </div>
  <div className="mb-3" >
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control inputl" id="exampleInputPassword1" placeholder='Enter your password'/>
  </div>
  <div className="mb-3">
    
    <label className="form-check-label" for="exampleCheck1" style={{color:"#54BD95"}}>Forgot your password?</label>
  </div>
  <button type="submit" className="button1">Login</button>
</div>
       
      </div>
    </div>
  )
}

export default Login
