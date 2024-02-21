import React from 'react'
import logo from '../Assets/image.png'
import './Navabr.css'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
  const navigate=useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo} className='logo' alt='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/models">Models</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Solution</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ai Tools</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Api</a>
        </li> */}
        <li className='nav-item'>
            <button className='btn btn-light' style={{border:"1px solid #54BD95",color:"#54BD95"}}>Get in Touch</button>
        </li>
        
        {/* style={{border:"1px solid #54BD95",color:"#54BD95"}} */}
        <li className='nav-item'>
            <button className='btn btn-success' style={{background:"#54BD95"}} onClick={()=>navigate('/login')}>Login/Signup</button>
        </li>
        {/* style={{background:"#54BD95"}} */}
         
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar2
