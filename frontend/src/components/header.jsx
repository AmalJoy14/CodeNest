import { Link } from 'react-router-dom';
import '../styles/header.css';
import SignOut from './Auth/signoutbutton.jsx';

function Header() {
  return (
    <header className="header"> 
      <div className="header_container">
        <Link to="/" className="header_logo">
          <div className="img-container">
            <img src="src/assets/b-logo.svg" alt="Icon" width={30} height={30} />
          </div> 
          CodeNest
        </Link>
        <nav>
          <ul className="navList">
            <li><Link to="/home" className="navLink">Home</Link></li>
            <li><Link to="/problems" className="navLink">Problems</Link></li>
            <li><Link to="/leaderboard" className="navLink">Leaderboard</Link></li>
            <li><Link to="/discuss" className="navLink">Discuss</Link></li>
            <li><Link to="/connect" className="navLink">Connect</Link></li>
            <li><Link to="/profile" className="navLink">Profile</Link></li>
            <SignOut/>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;  
