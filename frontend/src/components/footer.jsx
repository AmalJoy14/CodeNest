import { Link } from 'react-router-dom';  
import '../styles/footer.css';  

function Footer() {
  return (
    <footer className="footer"> 
      <div className="footer_container">
        <div className="grid">
          <div className="branding">
            <h2 className="logo">CodeNest</h2>
            <p className="tagline">Connect. Compete. Collaborate.</p>
          </div>
          <div className="links">
            <h3 className="linkTitle">Quick Links</h3>
            <ul className="linkList1">
              <li><Link to="/home" className="link">Home</Link></li>
              <li><Link to="/problems" className="link">Problems</Link></li>
              <li><Link to="/leaderboard" className="link">Leaderboard</Link></li>
            </ul>
            <ul className="linkList2">
              <li><Link to="/discuss" className="link">Discuss</Link></li>
              <li><Link to="/connect" className="link">Connect</Link></li>
              <li><Link to="/profile" className="link">Profile</Link></li>
            </ul>
          </div>
          
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} CodeNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;  
