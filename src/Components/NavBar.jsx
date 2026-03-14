import React, { useState } from 'react'
import logo from '../assets/LogoIcon.png'
import logoName from '../assets/LogoName.png'
import "../Styles/Navbar.css"
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* <nav className="navbar">
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
      </nav> */}


      <nav className="navbar">

      {/* Logo section */}
      <div className='imageblock'>
        <div className="logo">
          <img src={logo} alt="VictoryFit Logo" />
        </div>

        <div className='logoName'>
          <img src={logoName} alt="VictoryFit Logo"/>
        </div>
      </div>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Link to="/contact" className="btn primary nav-button">
        Get Started
      </Link>

    </nav>
    </div>
  )
}

export default NavBar