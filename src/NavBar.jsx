import React from 'react'
import logo from './assets/LogoIcon.png'
import logoName from './assets/LogoName.png'
import "./Styles/NavBar.css"
import './App.css'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate  =  useNavigate();
    
  return (
    <div>
          <nav className="navbar">
            <div className='imageblock'>

            
              <div className="logo">
                  <img
                      src={logo}
                      alt="VictoryFit Logo"
                      className="logo-img"
                  />
              </div>
              <div className='logoName'>
                <img src={logoName} 
                alt="VictoryFit Logo" 
                className="logoName-img"
                />
              </div>
            </div>
              <ul className="nav-links">
                  
                  <Link className='Nav-route' to="/"><li> Home</li></Link>
                  <Link className='Nav-route' to="/about"><li>About</li></Link>
                  <Link className='Nav-route' to="/service"><li>Services</li></Link>
                  <Link className='Nav-route' to="/programs"><li>Programs</li></Link>
                  <Link className='Nav-route' to="/contact"><li>Contact</li></Link>
                  
              </ul>
              <button onClick={()=>{navigate("/contact")}} className="btn primary"><b>Get started</b></button>
          </nav>
    </div>
  )
}

export default NavBar