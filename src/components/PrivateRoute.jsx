import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const PrivateRoute = () => {
    const { userDBJsonInfo } = useContext(LoginContext);

    return userDBJsonInfo ? <Outlet /> : <Navigate to="/authenticate" />;
};

export default PrivateRoute;
