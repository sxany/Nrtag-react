import React from 'react';
import '../assets/css/local.css';
import '../assets/css/input.css';
import Rekomendasi from './Rekomendasi';
import Footer from './Footer';
import Lewatkan from '../Lewatkan';

const Mainpage = () => {
    return (
        <div>
            <Lewatkan/>
            <Rekomendasi/>
            <Footer/> 
        </div>     
    );
};

export default Mainpage;