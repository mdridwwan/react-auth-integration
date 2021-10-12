import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import './Header.css'

const Header = () => {
    const {user,displayName, logout, error} = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">Place Order</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName} </span>
            <span>{error}</span>
            {user?.displayName && <button onClick={logout}>log out</button>}
        </div>
    );
};

export default Header;