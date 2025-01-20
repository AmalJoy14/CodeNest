import React, { useEffect, useState } from 'react';
import { Navigate , useLocation} from 'react-router-dom';
import Axios from 'axios';
import Loader from './loader';


const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Make an API call to verify if the user is authenticated
    Axios.get("http://localhost:3000/authenticate", { withCredentials: true })
      .then((response) => {
        setAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setAuthenticated(false);
        setLoading(false);
      });
  }, [location]);

  if (loading) {
    return <div><Loader /></div>;
  }

  return authenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
