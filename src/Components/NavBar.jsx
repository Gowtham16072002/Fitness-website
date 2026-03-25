// import React, { useState } from 'react'
// import logo from '../assets/LogoIcon.png'
// import logoName from '../assets/LogoName.png'
// import "../Styles/Navbar.css"
// import '../App.css'
// import { Link, useNavigate } from 'react-router-dom';

// function NavBar() {

//   const navigate = useNavigate();

//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">

//       <div className='imageblock'>
//         <div className="logo">
//           <img src={logo} alt="VictoryFit Logo" />
//         </div>

//         <div className='logoName'>
//           <img src={logoName} alt="VictoryFit Logo" />
//         </div>
//       </div>

//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>

//       <ul className={menuOpen ? "nav-links active" : "nav-links"}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/service">Services</Link></li>
//         <li><Link to="/programs">Programs</Link></li>
//         <li><Link to="/contact">Contact</Link></li>


//         <div className="nav-button">
//           <Link to="/login" className="login-btn">Login / </Link>
//           <Link to="/signup" className="signup-btn">Sign Up</Link>
//         </div>

//       </ul>

//       {/* <Link to="/contact" className="nav-button">
//           Get Started
//         </Link> */}

//       {/* <div className="nav-button">
//         <Link to="/login" className="login-btn">Login / </Link>
//         <Link to="/signup" className="signup-btn">Sign Up</Link>
//       </div> */}

//     </nav>
//   )
// }

// export default NavBar



import React, { useState } from 'react'
import logo from '../assets/LogoIcon.png'
import logoName from '../assets/LogoName.png'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className='imageblock'>
        <div className="logo">
          <img src={logo} alt="VictoryFit Logo" />
        </div>

        <div className='logoName'>
          <img src={logoName} alt="VictoryFit Logo" />
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="mobile-auth-item">
          <Link to="/login" className="auth-link">Login</Link>
          {/* <Link to="/signup" className="auth-link">Sign Up</Link> */}
        </li>
      </ul>

      <div className="nav-button">
        <Link to="/login" className="auth-link">Login</Link> 
        {/* <Link to="/signup" className="auth-link">Sign Up</Link> */}
      </div>

    </nav>
  )
}

export default NavBar