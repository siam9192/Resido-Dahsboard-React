import React, { useEffect, useState } from 'react';
import { GoSearch } from "react-icons/go";
import { FaBell, FaMoon } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import GetMode from '../Reuse/GetMode';
import { CgMenuLeft } from 'react-icons/cg';


const Navbar = () => {
    // https://griya.dexignzone.com/xhtml/index-2.html
    const mode = GetMode();
   
    useEffect(()=>{
       const type = localStorage.getItem('mode');
       if(type){
       document.body.classList.add(type);
       }
       else{
        
       }
    },[])
    const handleMode = ()=>{
        document.body.classList.toggle('light')
        if(localStorage.getItem('mode') === 'light'){
            localStorage.setItem('mode','dark');
        }
        else{
            localStorage.setItem('mode','light');
        }
       
    }
    return (
        <div className='py-6 bg-color_main_light flex justify-between items-center md:px-5 px-2 sticky top-0
        z-40'>
         <div className='px-3 py-2 lg:flex items-center gap-2 bg-color_main rounded-full lg:block hidden'>
        <input className='w-[300px] py-1 border-none outline-none bg-transparent text-text_main' placeholder='Search..'></input>
       <div className='text-text_main'>
       <GoSearch></GoSearch>
       </div>
        </div>

        <div className='flex items-center gap-2'>
            <img src="/images/resido-logo.png w-full" alt="" />
        <div className='text-3xl text-text_main block lg:hidden'>
                <CgMenuLeft></CgMenuLeft>
               </div>
        </div>
     
      
      <div className='flex items-center gap-8'>
      <div className='flex items-center gap-6'>
      <div className='md:p-3 p-1 bg-color_main rounded-md text-white relative hover:cursor-pointer' onClick={handleMode}>
      <div className='lg:text-4xl text-xl'>
        <FaMoon></FaMoon>
        </div>
      
         </div>
            <div className='md:p-3 p-1 bg-color_main rounded-md text-white relative'>
               <div className='lg:text-4xl text-xl'>
               <FaBell></FaBell>
               </div>
               <div className='absolute -top-2 -right-1 md:w-6 md:h-6 w-3 h-3  text-center md:text-[14px] text-[10px] bg-color_primary rounded-full'>
               4
               </div>
                </div>
                <div className='md:p-3 p-1 bg-color_main rounded-md text-white relative'>
                <div className='lg:text-4xl text-xl'>
              <IoMail></IoMail>
               </div>
               <div className='absolute -top-2 -right-1 md:w-6 md:h-6 w-3 h-3  text-center md:text-[14px] text-[10px]  bg-color_success rounded-full'>
               4
               </div>
                </div>
                <div className='md:p-3 p-1 bg-color_main rounded-md text-white relative'>
                <div className='lg:text-4xl text-xl'>
              <MdMessage></MdMessage>
               </div>
               <div className='absolute -top-2 -right-1 md:w-6 md:h-6 w-3 h-3  text-center md:text-[14px] text-[10px] bg-color_action_light rounded-full'>
               4
               </div>
                </div>
        </div>
        <div className='flex items-center gap-2'>
            <div className='space-y- lg:block hidden'>
                <h2 className='text-xl text-text_main
                 font-semibold text-end'>Roborto</h2>
                 <p className=' text-text_main text-[14px]'>ahsiam999@gmail.com</p>
            </div>
        <div>
           <img src='https://griya.dexignzone.com/xhtml/images/profile/pic1.jpg' className='md:w-14 md:h-14 w-10 h-10 rounded-lg'/>
        </div>
            </div>
      </div>
        </div>
    );
}

export default Navbar;
