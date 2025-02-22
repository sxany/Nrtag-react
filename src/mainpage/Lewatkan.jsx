import React from 'react';
import '../assets/css/local.css';
import '../assets/css/input.css';

const Lewatkan = () => {
    return (
        <div className='relative mx-auto max-md:mt-[500px]' style={{}}>
            {/*kotak*/}
             <div className='relative z-10 flex space-x-2'>
                <div className='kotak w-[34px] h-[13px] mt-4 '></div>
                    <p className=' text-black mt-1.5 opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Informasi Anda Lewatkan</p>
                    </div>
            {/*kotak informasi dan text */}
            <div className='ml-12 md:flex max-md:flex-col  relative space-x-2 '>
                <img src='./images/mumbai.jpg'className='md:max-w-[180px] md:max-h-[180px]'></img>
                    <div className='min-md:flex md:flex-col max-md:flex max-md:flex-col'>
                        <p className='penjelasan md:ml-2  text-black opacity-100 md:max-w-[200px]' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                            <p className='md:ml-2  text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                </div>
                <img src='./images/mumbai.jpg'className='md:w-[180px] md:max-h-[180px]'></img>
                    <div className='min-md:flex md:flex-col max-md:flex max-md:flex-col'>
                        <p className='md:ml-2  text-black opacity-100 md:max-w-[200px]' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                            <p className='md:ml-2  text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                
                </div>
                <img src='./images/mumbai.jpg'className='md:w-[180px] md:max-h-[180px]'></img>
                    <div className='min-md:flex md:flex-col max-md:flex max-md:flex-col'>
                        <p className='md:ml-2  text-black opacity-100 md:max-w-[200px]' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                            <p className='md:ml-2  text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                </div>

                <img src='./images/mumbai.jpg'className='md:w-[180px] md:max-h-[180px]'></img>
                    <div className='min-md:flex md:flex-col max-md:flex max-md:flex-col'>
                        <p className='md:ml-2  text-black opacity-100 md:max-w-[200px]' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis,</p>
                            <p className='md:ml-2  text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                </div>
            </div>
            
        </div>
    );
};

export default Lewatkan;