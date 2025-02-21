import React from 'react';
import '../assets/css/local.css';
import '../assets/css/input.css';

const Rekomendasi = () => {
    return (
        <div className='mx-auto md:mt-4' style={{maxWidth:'1280px'}}>
            <div className='relative flex mt-2'>
                {/** Kotak */}
                <div className='kotak w-[34px] h-[13px]'></div>
                <p 
                    className='text-black mt-[-10px] ml-1.5 opacity-100 grid' 
                    style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '20px' }}
                >
                    Rekomendasi
                </p>
            </div>

            {/** Poster dalam grid */}
            <div className='grid grid-cols-5 gap-x-6'>
                {/** Poster 1 */}
                <div className='ml-12 text-center'>
                    <img src='../images/mumbai.jpg' className='w-[180px] h-[200px]' alt="Black Myth Wukong" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Black Myth Wukong
                    </p>
                </div>

                {/** Poster 2 */}
                <div className='mx-auto text-center'>
                    <img src='../images/mumbai.jpg' className='w-[180px] h-[200px]' alt="The Legend Of Zelda" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        The Legend Of Zelda
                    </p>
                </div>

                {/** Poster 3 */}
                <div className='mx-auto text-center'>
                    <img src='../images/mumbai.jpg' className='w-[180px] h-[200px]' alt="Roblox" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Roblox
                    </p>
                </div>

                {/** Poster 4 */}
                <div className='mx-auto text-center'>
                    <img src='../images/mumbai.jpg' className='w-[180px] h-[200px]' alt="Elden Ring" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Elden Ring
                    </p>
                </div>

                {/** Poster 5 */}
                <div className='mx-auto text-center'>
                    <img src='../images/mumbai.jpg' className='w-[180px] h-[200px]' alt="Red Dead Redemption 2" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Red Dead Redemption 2
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rekomendasi;
