import React from 'react';
import "./navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className='navbar'>

    <div className='leftside'>
    <img className='logoimg' src={logo} alt='not found'/>
    
    </div>

    <div className='rightside'>
    <ul>
    <li>home</li>
    <li>explore</li>
    <li>4khdr</li>
    <li>cilbrun</li>
    <li>live and printshop</li>

    <li><button>SignIn</button></li>

    
    
    </ul>



    
    </div>
    
 
    </div>
  )
}

export default Navbar