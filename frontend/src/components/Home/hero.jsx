import { Link } from 'react-router-dom'; 
import './hero.css'; 

function Hero() {
  return (
    <div className= "hero">
      <div className="hero_content">
        <h1 className="hero_title">Welcome to CodeNest</h1>
        <p className="hero_subtitle">Connect. Compete. Collaborate.</p>
        <Link to="/problems" className="hero_cta">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Hero;