// src/components/Navbar.jsx
import React from 'react';
import './assets/css/input.css'
import './assets/css/local.css'
import { FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=" nav">
      <div className=' container1 mx-auto flex items-center h-28 rounded-b-md'>        
          < img className='flex-grow-0 pb-4' src='/images/logo.png'></img>        
        <div className=" text-lg mx-auto w-full max-w-xl items-center ">    
          <form>
            <div className='relative w-full'>
            <input
              id="search-bar"
              type="text" 
              placeholder="Search"
              name="Search"
              autocomplete="off"
              aria-label="Search"
              onBlur={() => (document.getElementById('search-bar').value = '')}
              class="w-full px-4 py-1 placeholder-gray-500 text-center shadow-md text-gray-700 rounded-full border-none focus:ring-2 focus:ring-gray-500 focus:outline-none focus:placeholder-transparent text-2xl opacity-100 hover:opacity-75 duration-200 font-title"
              />                             
            <button 
            type='submit'
            className='absolute top-1/2 right-2 transform -translate-y-1/2 opacity-100 hover:opacity-75 duration-200'>
            <FaSearch size={28} color='rgb(153,153,153)' className='search-icon' ></FaSearch>
            </button>  
            </div>       
          </form>        
        </div>
        
        <FaUser size={90} className='opacity-100 hover:opacity-75 transition duration-200 sm:mx-0 md:mr-6 lg:mr-16 pb-4'></FaUser>
      </div>     
    </nav>
  );
};

export default Navbar;
