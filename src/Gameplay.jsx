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
                        <div>
                        <iframe className='z-10 ml-24 opacity-100' width="300" height="200" src="https://www.youtube.com/embed/YX40ZDUIJT8?si=mJXin0u6HugBgQUn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                                                       
                                    
        </div>
    );
};

export default Gameplay;