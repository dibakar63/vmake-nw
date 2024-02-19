import React from 'react'
import './Navabr.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { useAuth } from '../Context/auth'
import Logo from '../Assets/image.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
const Navbar2 = () => {
//   const [auth,setAuth]=useAuth()
 // console.log(auth.name);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const navigate = useNavigate();
//   const handleLogout = () => {
//     setAuth({
//       ...auth,
//       name: null,
//       token: "",
//     });
//     localStorage.removeItem("auth");
//     setAuth(null);
//     toast.success("Logout Success");
//     navigate('/')
//   };
  return (
    
      <nav className="navbar navbar-expand-lg  navbar-light bg-light ">
  <div className="container-fluid">
    <img className="navbar-brand logo " src={Logo} onClick={()=>navigate('/')} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
            <button className='btn btn-success' style={{background:"#54BD95"}}>Login/Signup</button>
        </li>
        {/* style={{background:"#54BD95"}} */}
         
         
      </ul>
      
    </div>
  </div>
</nav>
    

  )
}

export default Navbar2