import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import React from 'react';
import './assets/css/input.css';
import Home from './Home';
import Informasipopuler from './page/InformasiPopuler';
import News from './content/News';


const App = () => {
 

  return (
    
      <Routes>
        
        {/* Home Page */}
        <Route path="/home" element={<Home />} />

        {/* InformasiPopuler page*/}
        <Route path="/home/informasipopuler" element={<Informasipopuler />} />

        {/* Redirect "/" to "/home" */}
        <Route path="/" element={<Home />} />

        {/*News page*/}
        <Route path='/home/news/:id' element={<News />}/>
      </Routes>
   
  );
};

export default App;
