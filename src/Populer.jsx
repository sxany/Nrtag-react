import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';

const Populer = () => {
    return (
        <div>
            {/*kotak*/}
            <div className='relative z-10 flex space-x-2 ml-6'>
                <div className='kotak w-[34px] h-[13px] mt-4 ml-7'></div>
                    <p className=' text-black mt-1.5 opacity-100 grid' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Informasi Terpopuler</p>
                        </div>
                        {/*Kotak Informasi dan text */}
                            <div className='grid col-span-1  grid-rows-4 absolute z-10 ml-24 space-y-2 '>
                                <div className='flex'>
                                    <img src='./images/Unfinished.jpg'className='w-[180px] h-auto'
                                    ></img>
                                    <div className='flex flex-col space-y-1'>
                                    <p className='ml-2 text-black opacity-100 flex max-w-[200px]' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                                    <p className='ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <img src='./images/Unfinished.jpg'className='w-[180px] h-auto'
                                    ></img>
                                    <div className='flex flex-col space-y-1'>
                                    <p className='ml-2 text-black opacity-100 flex max-w-[200px]' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                                    <p className='ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                    </div>

                                    <div className='flex'>
                                    <img src='./images/Unfinished.jpg'className='w-[180px] h-auto'
                                    ></img>
                                    <div className='flex flex-col space-y-1'>
                                    <p className='ml-2 text-black opacity-100 flex max-w-[200px]' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                                    <p className='ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <img src='./images/Unfinished.jpg'className='w-[180px] h-auto'
                                    ></img>
                                    <div className='flex flex-col space-y-1'>
                                    <p className='ml-2 text-black opacity-100 flex max-w-[200px]' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                                    <p className='ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                </div>
            </div>
        </div>
    );
};

export default Populer;