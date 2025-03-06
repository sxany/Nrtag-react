import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';

const Populer = () => {
    return (
        <div className='md:hidde  '>
            {/*kotak*/}
            <div className='populer max-md:mt-[100px] relative z-10 flex space-x-2 max-md:-ml-7 md:ml-6'>
                <div className='kotak w-[34px] h-[13px] mt-4 ml-7'></div>
                    <p className=' text-black mt-1.5 opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Informasi Terpopuler</p>
                        </div>
                        {/*Kotak Informasi dan text */}
                            <div className='populer1 max-md:grid max-md:grid-flow-row relative z-10 md:ml-24 max-md:ml-12 md:space-y-2 max-md:space-y-2'>
                            <div className='md:flex max-md:flex'>
                                    <img src='./images/carousel 2.jpg'className='populer2 max-sm:w-[200px}  max-h-[150px] '
                                    ></img>
                                    <div className=' space-y-1 '>
                                    <p className='texthidden  ml-2   text-black opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                                    <p className='texthidden  ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                    </div>

                                <div className='md:flex max-md:flex ml-0'>
                                    <img src='./images/carousel 2.jpg'className='populer2 max-sm:w-[200px} max-h-[150px]'
                                    ></img>
                                    <div className=' space-y-1'>
                                    <p className='texthidden  ml-2 text-black opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                                    <p className='texthidden  ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                    </div>

                                    <div className='md:flex max-md:flex'>
                                    <img src='./images/carousel 2.jpg'className='populer2 max-sm:w-[200px} max-h-[150px] '
                                    ></img>
                                    <div className='space-y-1'>
                                    <p className='texthidden  ml-2 text-black opacity-100  ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                                    <p className='texthidden  ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                </div>

                                <div className='md:flex max-md:flex'>
                                    <img src='./images/carousel 2.jpg'className='populer2 max-sm:w-[200px}  max-h-[150px] '
                                    ></img>
                                    <div className=' space-y-1'>
                                    <p className='texthidden ml-2 text-black opacity-100 flex ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                                    <p className='texthidden ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                </div>
            </div>
        </div>
    );
};

export default Populer;