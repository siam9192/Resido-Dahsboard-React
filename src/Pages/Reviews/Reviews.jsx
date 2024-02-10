import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AxiosBase from '../../Components/Reuse/Axios/AxiosBase';
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import Rating from 'react-rating';
import { MdFilterListAlt } from "react-icons/md";
import { IoReload } from "react-icons/io5";
const Reviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        AxiosBase().get('/admin/reviews/get')
        .then(res =>{
            setReviews(res.data)
        })
    },[])
   
    return (
        <div className='py-5 '>
        <div className='p-5 rounded-lg bg-color_main_light'> 
        <h1 className='text-3xl text-text_main'>Customer Reviews</h1>
        </div>
        <div className='mt-5 space-y-4'>
            <div className='flex gap-3 items-center justify-end py-5'>
                <button className='flex items-center text-white text-xl  bg-color_primary px-6 py-3 rounded-md'><MdFilterListAlt></MdFilterListAlt><span>Filter</span></button>
                <button className='flex items-center text-white text-xl  bg-color_action px-6 py-3 rounded-md'> <IoReload></IoReload><span>Reload</span></button>
            </div>
           <div className='space-y-5'>
           {
 reviews.map((review,index)=>{
    return <div className=' bg-color_main_light p-5 space-y-3'>
         <div className=' flex justify-between rounded-md' key={ index}>
   <div className='  flex gap-2'>
   <img src={review.userPhoto||''} alt="" className='w-14 h-14 rounded-full' />
   <div className='space-y-1'>
    <h1 className='text-xl text-text_main font-semibold'>{review.name}</h1>
    <h2>{review.date.day < 10 ? '0'+ review.date.day : review.date.day}-{review.date.month < 10 ? '0'+ review.date.month : review.date.month}-{review.date.year}</h2>
   </div>
   </div>
   <div className=' text-color_action text-xl'>
      <Rating initialRating={4} emptySymbol={<GoStar></GoStar>} fullSymbol={<GoStarFill></GoStarFill>} readonly/>
      </div>
      
     
     
    
    </div>
      <p className='text-text_main text-[14px] ]'>{review.message||review.reviewText}</p>
      <div className=' flex justify-end'>
      <div className='flex justify-between items-center gap-2 mt-2'>
        <button className='bg-color_primary px-4 py-2 rounded-lg text-text_main'>Visit</button>
        <div className='flex items-center gap-2'>
        <button className=' border border-color_primary hover:bg-color_primary text-text_main py-2 px-4 rounded-lg'>Hide</button>
        <button className=' border border-color_action hover:bg-color_action text-text_main py-2 px-4 rounded-lg'>Remove</button>
        </div>
      </div>
      </div>
    </div>
 })
            }
           </div>
        </div>
            
        </div>
    );
}

export default Reviews;
