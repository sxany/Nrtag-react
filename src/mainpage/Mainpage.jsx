import React from 'react';
import '../assets/css/local.css';
import '../assets/css/input.css';
import Rekomendasi from './Rekomendasi';

const Mainpage = () => {
    return (
        <div className='container container2 jumbotron mx-auto relative grid grid-cols-5'>
                <Rekomendasi/>
        </div>
    );
};

export default Mainpage;