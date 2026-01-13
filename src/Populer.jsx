import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';
import { useNavigate } from 'react-router-dom';


const Populer = () => {
    const navigate = useNavigate();
    const openInformasiPopuler =() =>{
        navigate('/home/informasipopuler');
    }
    const openNews = (id) =>{
        navigate(`/home/news/${id}`);
    
    };
    return (
        <div className='md:hidd  '>
            {/*kotak*/}
            <div className='populer max-md:mt-[100px] relative z-10 flex space-x-2 max-md:-ml-7 md:ml-6'>
                <div className='kotak w-[34px] h-[13px] mt-4 ml-7'></div>
                    <p onClick={openInformasiPopuler} className=' text-black mt-1.5 opacity-100 transition-opacity hover:opacity-50 cursor-pointer' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Informasi Terpopuler</p>
                        </div>
                        {/*Kotak Informasi dan text */}
                            <div  className='populer1 max-md:grid max-md:grid-flow-row relative z-10 md:ml-24 max-md:ml-12 md:space-y-2 max-md:space-y-2 cursor-pointer'>
                            <div className='md:flex max-md:flex'>
                                    <img  src='/images/news/poster1.jpg'className='populer2 max-sm:w-[200px}  max-h-[150px]  '
                                    ></img>
                                    <div onClick={() => openNews(1)} className=' space-y-1 opacity-100 transition-opacity hover:opacity-50'>
                                    <p className='texthidden  ml-2   text-black opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Ingin Jago Bermain Valorant? Ini Dia 5 Tips Yang Kamu Harus Tau!</p>
                                    <p className='texthidden  ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                    </div>

                                <div className='md:flex max-md:flex ml-0'>
                                    <img src='/images/news/poster2.png'className='populer2 max-sm:w-[200px} max-h-[150px]'
                                    ></img>
                                    <div onClick={() => openNews(2)} className=' space-y-1 opacity-100 transition-opacity hover:opacity-50'>
                                    <p className='texthidden  ml-2 text-black opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Cantarella Hadir! Semua yang Perlu Kamu Tau tentang Update Wuthering Waves 2.2</p>
                                    <p className='texthidden  ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                    </div>

                                    <div className='md:flex max-md:flex'>
                                    <img src='/images/news/poster3.jpg'className='populer2 max-sm:w-[200px} max-h-[150px] '
                                    ></img>
                                    <div onClick={() => openNews(3)} className='space-y-1 opacity-100 transition-opacity hover:opacity-50'>
                                    <p className='texthidden  ml-2 text-black   ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Semua yang Perlu Kamu Tahu tentang Update Genshin Impact 5.5</p>
                                    <p className='texthidden  ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                </div>

                                <div className='md:flex max-md:flex'>
                                    <img src='/images/news/poster4.jpg'className='populer2 max-sm:w-[200px}  max-h-[167px] '
                                    ></img>
                                    <div className=' space-y-1 opacity-100 transition-opacity hover:opacity-50 '>
                                    <p onClick={() => openNews(4)} className='texthidden ml-2 text-black opacity-100 flex ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>Rockstar Games Umumkan Tanggal Rilis GTA 6: Siap Menggebrak Dunia Game di 2025</p>
                                    <p className='texthidden ml-2 text-[#706969] opacity-100 ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'11px'}}>12 jam lalu</p>
                                    </div>
                                </div>
            </div>
        </div>
    );
};

export default Populer;