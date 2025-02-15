import { Link } from 'react-router-dom';
import '../styles/header.css';
import SignOut from './Auth/signoutbutton.jsx';
import axios from 'axios';
import logo from '../assets/b-logo.svg';
import noProfileImage from '../assets/noProfileImage.png';
import { useState, useEffect } from 'react';

function Header() {
  const [imageUrl, setImageUrl] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profileImage", {
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


  return (
    <header className="header"> 
      <div className="header_container">
        <Link to="/" className="header_logo">
          <div className="img-container">
            <img src={logo} alt="Icon" width={30} height={30} />
          </div> 
          CodeNest
        </Link>
        <nav>
          <ul className="navList">
            <li><Link to="/home" className="navLink">Home</Link></li>
            <li><Link to="/problems" className="navLink">Problems</Link></li>
            <li><Link to="/leaderboard" className="navLink">Leaderboard</Link></li>
            <li><Link to="/discuss" className="navLink">Discuss</Link></li>
            <li><Link to="/profile" className="navLink"><div className="avatar" title={username}><img src={imageUrl || noProfileImage}  onError={(e) => e.target.src = noProfileImage} className="avatarImage" /></div></Link></li>
            <SignOut/>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;  
