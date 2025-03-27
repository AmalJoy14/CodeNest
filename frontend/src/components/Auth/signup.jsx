import React,{useState} from "react";
import Axios from "axios";
import './signup.css';
import logo from '../assets/b-logo.svg'; 
import { Link , useNavigate} from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post(
                `${BACKEND_URL}/api/signup`,
                {fullname ,username, password },
                {withCredentials: true}
            );
            if (response.status === 200) {
                console.log(response.data.message); 
                navigate("/home");
            }
        } catch (error) {
            if ( error.response.status === 409) {
                setErrorMessage("*user already exists."); 
              } else {
                setErrorMessage("An unexpected error occurred.");
              }
        }
    };

    return (
        <div className="signup-full">
            <div className="signup-container">
                <div className="img-container">
                    <img src={logo} alt="Icon" width={50} height={50} />
                </div> 
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="signup-input" placeholder="Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required minLength={3}/>
                    <input type="text" className="signup-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required minLength={3}/>
                    <input type="password" className="signup-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={3}/>
                    <button type="submit" className="signup-button">Register</button>
                </form>
                <div className="errorbox">
                    {errorMessage && <p className="error_message">{errorMessage}</p>}
                </div>
                <div className="signup-link">
                     <Link to="/signin">Already have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
