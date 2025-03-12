// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import './assets/css/input.css'
import Mainpage from './mainpage/Mainpage';
import Popular1 from './page/popular1';

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron/>
      <Mainpage/>   
      {/*route*/}
      <Routes>
        <Route path='/element ={<Popular1/>}></Route>'></Route>
      <Route path='/popular1' element={<Popular1/>}></Route>    
      </Routes>
  </div>
    
  );
};

export default App;
