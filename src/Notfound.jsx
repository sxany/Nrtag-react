import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        alert("Page not found! Redirecting to Home...");
        navigate('/home'); 
    }, [navigate]);

    return null;

    return (
        <div></div>
    );
};

export default NotFound;
