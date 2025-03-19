import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/local.css';
import '../assets/css/input.css';
import { useNavigate } from 'react-router-dom';
import Navbarpopuler from './Navbarpopuler';

const Informasipopuler = () => {
    const navigate = useNavigate();
    const openHome =() =>{
        navigate("/home");

    }
    
    return (
        <div >
            <Navbarpopuler/>
            <div onClick={openHome} className='cursor-pointer text-center'>
            <h1>Popular Page</h1>
            <p>Currently on Progress</p>
            <p>Stay Tune!!!</p>
            <Link to='../'></Link>
            </div>
        </div>
    );
};

export default Informasipopuler;
