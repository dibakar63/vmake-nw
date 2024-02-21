import React from 'react'
import './Login.css'
import logo1 from '../Assets/image.png'
import object from '../Assets/Group 20.png'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate()
  return (
    <div className='container-fluid login'>
      <div className='row loginm'>
        <div className='col-md-5 col-sm-5 loginlogo'>
          <img src={logo1} className='logomain'/>
          <img src={object} className='object'/>
        </div>
        <div className='col-md-5 col-sm-5 logincard'>
             <h1>Sign Up</h1>
             <h6>Already Login?<span style={{color:"#54BD95",cursor:"pointer"}} onClick={()=>navigate('/login')}>Login Here</span></h6>

   <div className="mt-6 mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="name" className="form-control inputl" id="exampleInputName" aria-describedby="namelHelp" placeholder='Enter your name'/>
    
  </div>       
  <div className="mt-6 mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control inputl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email'/>
    
  </div>
  <div className="mb-3" >
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control inputl" id="exampleInputPassword1" placeholder='Enter your password'/>
  </div>
  
  <button type="submit" className="button1">Signup</button>
</div>
       
      </div>
    </div>
  )
}

export default Signup
