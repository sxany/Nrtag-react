import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/local.css';
import '../assets/css/input.css';

const Informasipopuler = () => {
    const openHome =() =>{
        window.open('/home');
    }
    return (
        <div onClick={openHome} className='cursor-pointer'>
            <h1>Popular Page</h1>
            <p>This is the popular page content.</p>
            <Link to='../'></Link>
        </div>
    );
};

export default Informasipopuler;
