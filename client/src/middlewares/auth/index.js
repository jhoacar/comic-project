import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

export default function AuthMiddleWareComponent ({ children }) {

    const [isLoggedIn] = useContext(AuthContext);

    return (
        <>
            {isLoggedIn && children}
            {!isLoggedIn && <Navigate to="/"/>}
        </>
    );
}