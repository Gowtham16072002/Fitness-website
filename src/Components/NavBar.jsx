import React, { useEffect, useState } from "react";
import logo from "../assets/LogoIcon.png";
import logoName from "../assets/LogoName.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user,setUser] = useState(null)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("http://localhost:3000/auth/profile", {
          credentials: "include",
        });
        if (!res.ok) {
          console.log("User not logged in");
          return;
        }

        const data = await res.json();
        setUser(data.user)
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <nav className="navbar">
      <div className="imageblock">
        <div className="logo">
          <img src={logo} alt="VictoryFit Logo" />
        </div>

        <div className="logoName">
          <img src={logoName} alt="VictoryFit Logo" />
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {user && <li className="mobile-auth-item">
          <Link to="/login" className="auth-link">
            {user && user.fullName}
          </Link>
        </li>}
        {!user && <li className="mobile-auth-item">
          <Link to="/login" className="auth-link">
            loging
          </Link>
        </li>}
      </ul>

      <div className="nav-button">
        <Link to="/login" className="auth-link">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
