import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const PrivateRoute = () => {
    const { userLoggedInfo } = useContext(LoginContext);
    
    return userLoggedInfo ? <Outlet /> : <Navigate to="/authenticate" />;
};

export default PrivateRoute;
