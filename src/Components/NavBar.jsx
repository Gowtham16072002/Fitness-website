import React from 'react'
import logo from '../assets/LogoIcon.png'
import logoName from '../assets/LogoName.png'
import "../Styles/Navbar.css"
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate = useNavigate();

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

          <li><Link className='Nav-route' to="/">Home</Link></li>
          <li><Link className='Nav-route' to="/about">About</Link></li>
          <li><Link className='Nav-route' to="/service">Services</Link></li>
          <li><Link className='Nav-route' to="/programs">Programs</Link></li>
          <li><Link className='Nav-route' to="/contact">Contact</Link></li>

        </ul>
        <Link to="/contact" className="btn primary nav-button"><b>Get started</b></Link>
      </nav>
    </div>
  )
}

export default NavBar