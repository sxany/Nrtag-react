import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import './assets/css/input.css';
import Home from './Home';
import Informasipopuler from './page/InformasiPopuler';


const RemoveTrailingSlash = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.endsWith('/') && location.pathname !== '/') {
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]);

  return null;
};


const App = () => {
 

  return (
    
      <Routes>
        
        
        {/* Home Page */}
        <Route path="/home" element={<Home />} />

        {/* Popular1 Page */}
        <Route path="/home/informasipopuler" element={<Informasipopuler />} />

        {/* Redirect "/" to "/home" */}
        <Route path="/" element={<Home />} />

        
      </Routes>
   
  );
};

export default App;
