import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';


const Jumbotron = () => {
  
  return (
   //jumbotron
    <div className='container container2 jumbotron mx-auto relative grid grid-cols-3'>
      <div className='absolute inset-0 bg-cover bg-center opacity-40 z-0 blur-[1.6px] ' style={{ backgroundImage: 'url(./images/jumbotron.webp)' }}>
      </div>
    {/* kotak dan informasi hari ini*/}
      <div className='relative z-10 col-span-2'>
        <div className='flex space-x-2'>
          <div className="kotak w-[34px] h-[13px] mt-4"></div>
          <p className=' text-black mt-2.5 opacity-100 grid  ' style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '500', fontStyle: 'normal', fontSize:'20px'}}>Informasi hari ini</p>
        </div>
        {/* Carousel */}
          <div className='grid col-span-1 carousel mt-50'>
          <div id='default-carousel' className='relative w-full' data-carousel='slide'>
            
            <div className='relative'>

              {/* Carousel item 1*/}
              <div className='duration-700 ease-in-out' data-carousel-item>
              <img src='./images/Unfinished.jpg' className='InformasiHi relative left-10 w-full'></img>
              </div>

              {/* Carousel item 2*/}
              <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img src='./images/carousel 2.jpg' className='InformasiHi relative left-10 w-full'></img>
              </div>

              {/* Carousel item 3*/}
              <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img src='./images/carousel 3.jpg' className='InformasiHi relative left-10 w-full'></img>
              </div>

              {/* Carousel item 4*/}
              <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img src='./images/carousel 4.jpg' className='InformasiHi relative left-10 w-full'></img>
              </div>

              {/* Carousel item 5*/}
              <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img src='./images/carousel 5.jpg' className='InformasiHi relative left-10 w-full'></img>
              </div>
            </div>

            {/* Carousel Button */}
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 ">
            <button type="button" class="w-3 h-3 rounded-full" style={{backgroundColor: 'black'}} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" style={{backgroundColor: 'black'}} aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" style={{backgroundColor: 'black'}} aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" style={{backgroundColor: 'black'}} aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-full" style={{backgroundColor: 'black'}} aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

          </div>
          
          
          <p className='relative left-10 font-title'>Peran Game Dalam Membuat Lingkungan Nyaman</p>
          <p1 className='relative left-10 font-title text-[10px] text-[#706969]' >12 jam lalu </p1>
        </div>
       
      </div>
    </div>
   
    
    
  );
};

export default Jumbotron;