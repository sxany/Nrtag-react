import React from 'react';
import '../assets/css/local.css';
import '../assets/css/input.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbarnews from './Navbarnews';

const News = () => {
    const navigate = useNavigate();
    const openHome =() =>{
      navigate('/home');
    }
    return (
        <div >
            <Navbarnews/>
            <div className='text-center cursor-pointer' onClick={openHome}>
            <h1>Latest News</h1>
            <p>Stay tuned for the latest updates.</p>
            </div>
        </div>
    );
};

export default News;