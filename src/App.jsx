// src/App.jsx
import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import './assets/css/input.css'
import Mainpage from './mainpage/Mainpage';

const App = () => {
  return (
    
    <div>
     
      <Navbar />
      <Jumbotron/>
      <Mainpage/>       
    </div>
  );
};

export default App;
