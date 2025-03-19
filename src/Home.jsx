// src/Home.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Mainpage from './mainpage/Mainpage';


const Home = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (window.location.pathname.endsWith('/')) {
        navigate('/home', { replace: true });
      }
    }, [navigate]);
  
    return (
    <div>
      <Navbar />
      <Jumbotron />
      <Mainpage />
    </div>
  );
};

export default Home;
