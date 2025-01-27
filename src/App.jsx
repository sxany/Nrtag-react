// src/App.jsx
import React from 'react';
import Navbar from './navbar';
import Jumbotron from './Jumbotron';
import './assets/css/input.css'
import Carousel from './Carousel';


const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron/>         
    </div>
  );
};

export default App;
