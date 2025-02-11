import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';

const Rekomendasi = () => {
    return (
        <div>
            <div className='relative flex mt-36'>
                {/**Kotak*/}
                <div className='kotak w-[34px] h-[13px]  '></div>
                <p className='text-black mt-[-10px] ml-1.5 opacity-100 grid' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Rekomendasi</p>
            </div>
        </div>
    );
};

export default Rekomendasi;