import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';

const Gameplay = () => {
    return (
        <div className=''>
            {/*kotak*/}
            <div className='relative z-10 md:flex max-md:flex space-x-2 md:ml-6 max-md:-ml-7'>
                <div className='kotak w-[34px] h-[13px] mt-4 ml-7 '></div>
                    <p className=' text-black mt-1.5 opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Musik Hari Ini</p>
                    </div>
                    {/*Youtube iframe*/}    
                            <div>
                                <iframe className='relative max-md:ml-10 md:z-30 ml-24 rounded-md h-[200px] aspect-auto' src="https://www.youtube.com/embed/?listType=playlist&list=RDdJf4wCdLU18&autoplay=0&mute=1"  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullScreen></iframe>
                            </div>  
                                              
        </div>
    );
};

export default Gameplay;