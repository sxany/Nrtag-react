import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';

const Gameplay = () => {
    return (
        <div>
            {/*kotak*/}
            <div className='relative z-10 flex space-x-2 ml-6'>
                <div className='kotak w-[34px] h-[13px] mt-4 ml-7'></div>
                    <p className=' text-black mt-1.5 opacity-100 grid' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Random Gameplay</p>
                    
                    {/*Youtube iframe*/}
                        </div>
                        <div className='ml-24 z-10'>
                        <iframe width="300px" height="200px" src="https://www.youtube.com/embed/IpFX2vq8HKw?autoplay=0&controls=0" frameborder="0" allow='autoplay' allowfullscreen></iframe>
                        </div>
                    
                            
                        
                                    
                                    
        </div>
    );
};

export default Gameplay;