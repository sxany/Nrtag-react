import React from 'react';
import '../assets/css/local.css';
import '../assets/css/input.css';

const Rekomendasi = () => {
    return (
        <div className='mx-auto md:mt-4' style={{}}>
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
            <div className='md:grid md:grid-cols-6 md:gap-x-4 max-md:space-y-2'>
                {/** Poster 1 */}
                <div className='ml-12 text-center max-md:mt-2'>
                    <img src='../images/mumbai.jpg' className='md:w-[180px] md:h-[200px]' alt="Black Myth Wukong" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Black Myth Wukong
                    </p>
                    <p1 className='md:hidden'
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize: '16px' }}
                    >
                       Black Myth: Wukong is an upcoming action RPG developed by Game Science, inspired by the classic Chinese novel Journey to the West. Players control the Destined One, a warrior with abilities similar to Sun Wukong, battling mythical creatures and deities in a richly detailed world based on Chinese folklore.
                    </p1>
                </div>

                {/** Poster 2 */}
                <div className='ml-12 mx-auto text-center'>
                    <img src='../images/mumbai.jpg' className='md:w-[180px] md:h-[200px]' alt="The Legend Of Zelda" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        The Legend Of Zelda
                    </p>
                </div>

                {/** Poster 3 */}
                <div className='ml-12 mx-auto text-center'>
                    <img src='../images/mumbai.jpg' className='md:w-[180px] md:h-[200px]' alt="Roblox" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Roblox
                    </p>
                </div>

                {/** Poster 4 */}
                <div className='ml-12 mx-auto text-center'>
                    <img src='../images/mumbai.jpg' className='md:w-[180px] md:h-[200px]' alt="Elden Ring" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Elden Ring
                    </p>
                </div>

                {/** Poster 5 */}
                <div className='ml-12 mx-auto text-center'>
                    <img src='../images/mumbai.jpg' className='md:w-[180px] md:h-[200px]' alt="Red Dead Redemption 2" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Red Dead Redemption 2
                    </p>
                    
                </div>

                 {/** Poster 6 */}
                 <div className='ml-12 text-center'>
                    <img src='../images/mumbai.jpg' className='md:w-[180px] md:h-[200px]' alt="Red Dead Redemption 2" />
                    <p 
                        style={{ fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize: '21px' }}
                    >
                        Final Fantasy XIV
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rekomendasi;
