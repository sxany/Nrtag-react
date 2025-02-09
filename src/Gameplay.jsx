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
                        </div>
                        
                        <img src='./images/Unfinished.jpg'className='z-10 flex relative w-[300px] h-auto ml-24'
                                    ></img>
                                    
        </div>
    );
};

export default Gameplay;