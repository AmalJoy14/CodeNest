import React ,{useState} from "react";
import Axios from "axios";
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
import logo from '../../assets/b-logo.svg'; 

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post(
                `${BACKEND_URL}/api/signin`,
                {username, password },
                {withCredentials: true}
            );
            if (response.status === 200) {
                console.log(response.data.message); 
                navigate("/home");
            }
        } catch (error) {
            if ( error.response.status === 404) {
                setErrorMessage("*incorrect credentials."); 
            } else {
                setErrorMessage("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="signin-full">
            <div className="signin-container">
                <div className="img-container">
                    <img src={logo} alt="Icon" width={50} height={50} />
                </div> 
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="signin-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" className="signin-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className="signin-button">Sign in</button>
                </form>
                <div className="errorbox">
                    {errorMessage && <p className="error_message">{errorMessage}</p>}
                </div>
                <div className="signin-link">
                     <Link to="/signup">Don't have an account?</Link>
                </div>
            </div>
        </div> 
    );
};

export default SignIn;
