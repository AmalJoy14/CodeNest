import React from "react";
import '../styles/signup.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="signup-full">
            <div className="signup-container">
                <div className="img-container">
                    <img src="src/assets/b-logo.svg" alt="Icon" width={50} height={50} />
                </div> 
                <h2>Sign Up</h2>
                <form>
                    <input type="text" className="signup-input" placeholder="Username" required />
                    <input type="password" className="signup-input" placeholder="Password" required />
                    <button type="submit" className="signup-button">Register</button>
                </form>
                <div className="signup-link">
                     <Link to="/signin">Already have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
