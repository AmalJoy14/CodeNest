import { Link } from 'react-router-dom';
import '../styles/header.css';
import SignOut from './Auth/signoutbutton.jsx';
import axios from 'axios';
import logo from '../assets/b-logo.svg';
import noProfileImage from '../assets/noProfileImage.png';
import { useState, useEffect } from 'react';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function Header() {
  const [imageUrl, setImageUrl] = useState(null);
  const [username, setUsername] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/profileImage`, {
          withCredentials: true, 
        });
        
        if (response.data.imageUrl) {
          setImageUrl(response.data.imageUrl);
        }
        if (response.data.username) {
          setUsername(response.data.username);
        }

      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImage();
  }, []);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/problems", label: "Problems" },
    { to: "/leaderboard", label: "Leaderboard" },
    { to: "/discuss", label: "Discuss" },
    {
      to: "/profile", 
      label: (
        <div className="specialAvatar">
          <div>Profile</div>
          <div className="avatar" title={username}>
            <img
              src={imageUrl || noProfileImage}
              onError={e => e.target.src = noProfileImage}
              className="avatarImage"
            />
          </div>
        
        </div>
      )
    },
    { component: <SignOut /> }
  ];


  return (
    
    <header className="header">
            <div className="header_container">
              <Link to="/" className="header_logo">
                <img src={logo} alt="Icon" width={30} height={30} />
                CodeNest
              </Link>
    
              {/* DESKTOP NAV: always in markup */}
              <ul className="navList">
                {links.map((link, i) => (
                  <li key={i}>
                    {link.to
                      ? <Link to={link.to} className="navLink">{link.label}</Link>
                      : link.component
                    }
                  </li>
                ))}
              </ul>
    
              {/* Hamburger toggle (mobile only) */}
              <button 
                className="menu-toggle" 
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >☰</button>
            </div>
  
        {/* Full-screen overlay */}
        <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
  
          <ul className="overlay-nav">
            {links.map((link, i) => (
              <li key={i} onClick={() => setMenuOpen(false)}>
                {link.to
                  ? <Link to={link.to} className="navLink">{link.label}</Link>
                  : link.component
                }
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
}

export default Header;  
