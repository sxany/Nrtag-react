import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';
import Carousel from './Carousel';

const Jumbotron = () => {
  
  return (
   //jumbotron
    <div className='container container2 jumbotron mx-auto relative grid grid-cols-3'>
      <div className='absolute inset-0 bg-cover bg-center opacity-40 z-0 blur-[1.6px] ' style={{ backgroundImage: 'url(./images/jumbotron.webp)' }}>
      </div>
    {/* kotak dan informasi hari ini*/}
      <div className='relative z-10 col-span-2'>
        <div className='flex space-x-2'>
          <div className="kotak w-[34px] h-[13px] mt-4"></div>
          <p className=' text-black mt-2.5 opacity-100 grid  ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Informasi hari ini</p>
        </div>
        <Carousel/>
       
      </div>
    </div>
  );
};

export default Jumbotron;