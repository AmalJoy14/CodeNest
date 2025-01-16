import React from "react";
import '../styles/signin.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="signin-full">
            <div className="signin-container">
                <h2>Sign In</h2>
                <form>
                    <input type="text" className="signin-input" placeholder="Username" required />
                    <input type="password" className="signin-input" placeholder="Password" required />
                    <button type="submit" className="signin-button">Sign in</button>
                </form>
                <div className="signin-link">
                     <Link to="/signup">Don't have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
