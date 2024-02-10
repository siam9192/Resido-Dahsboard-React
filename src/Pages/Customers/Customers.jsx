import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SlOptionsVertical } from "react-icons/sl";
import AxiosBase from '../../Components/Reuse/Axios/AxiosBase';
import { Link } from 'react-router-dom';

const Customers = () => {
    const [customers,setCustomers] = useState([]);
    const [activeIndex,setActiveIndex] = useState(0);
    const [activeOption,setActiveOption] = useState(null);
    const optionRef = useRef({});
    useEffect(()=>{
        axios.get('/Json/Customers.json')
        .then(res =>{
           
            setCustomers(res.data)
        })
    },[])
    const handleOption = (index)=>{
    if(index===activeOption){
  setActiveOption(null)
    }
    else{
        setActiveOption(index)
    }
    }
    function handler (event){
        if(optionRef.current && !optionRef.current.contains(event.target)){
            setActiveOption(null)
        }
        else{

        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown',handler)
        return ()=>{
            document.removeEventListener('mousedown',handler)
        }
    },[])
    return (
        <div className='py-5'>
           <div className='p-5 rounded-lg bg-color_main_light'> 
           <h1 className='text-3xl text-text_main'>Customers List</h1>
           </div>
           <div className='flex lg:flex-row flex-col gap-5 mt-5'>
            <div className='lg:w-[70%] space-y-5'>
            <div className='p-5 rounded-lg bg-color_main_light flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5 w-full '>
                <div className='px-2 flex items-center gap-2 text-text_main bg-color_main rounded-full flex-1'>
                    <FaSearch ></FaSearch>
                    <input className='w-full lg:py-2 py-3 bg-transparent border-none outline-none' placeholder='Search by name'></input>
                    </div> 
                    <div className='px-2 flex items-center gap-2 text-text_main bg-color_main rounded-full flex-1'>
                    <input type='date' className='w-full lg:py-2 py-3 bg-transparent border-none outline-none' placeholder='Search by name'></input>
                    </div> 
                    <div className='px-2 flex items-center gap-2 text-text_main  bg-color_main rounded-full flex-1'>
                    
                    <select className='w-full lg:py-2 py-3 bg-transparent border-none outline-none bg-color_main'>
                        <option value='' className='bg-color_main text-text_main'>Auto select</option>
                        <option value='' className='bg-color_main text-text_main'>Active</option>
                        <option value='block' className='bg-color_main text-text_main'>Blocked</option></select>
                    </div> 
          
           </div>
           <div className=''>
           
            <div className="overflow-x-auto">
  <table className="table ">
   
    <tbody>
    {/* onClick={()=>setActiveIndex(index)} */}
    {
            customers.map((customer,index)=>{
                return<tr className=' bg-color_main text-text_main hover:bg-color_main_light hover:cursor-pointer ' key={index} >
                <th><div className='flex items-center gap-2 '>
                    <img src={'https://i.ibb.co/x7fZytf/IMG20230601121705.jpg'} className='w-10 h-10 rounded-full' alt="" />
                    <h3>{customer.name}</h3></div></th>
                <td>{customer.email}</td>
                <td>{customer.contact_phone}</td>
                <td>{customer.joining_date}</td>
                <td><div className='px-4 py-1 text-black text-center rounded-full' style={{backgroundColor:customer.status === 'Active' ? '#cef5de' : '#f1aeb4'}}>{customer.status}</div></td>
                <td className='relative' >
                   <div onClick={()=>handleOption(index)}> <SlOptionsVertical></SlOptionsVertical>
                  
                   </div>
                   <div className={`absolute top-10 z-40 font-semibold -left-20 min-w-24 rounded-lg flex flex-col justify-center  bg-color_main_light text-text_main p-2 shado shadow-lg ${index === activeOption ? 'block' : 'hidden'} `} ref={optionRef}>
                    <Link className='p-1 hover:bg-color_main'>Profile</Link>
                   {
                    customer.status !== 'block'? <Link className=' text-color_action p-1 hover:bg-color_main'>Block</Link> :
                    <Link className=' text-color_success p-1 hover:bg-color_main'>unBlock</Link>
                   }
                    <Link className=' text-red-600 py-1'>Remove</Link>
                   </div>
                </td>
              </tr>
             
            })
            }
      
      
    </tbody>
  </table>
</div>
           </div>
            </div>
            <div className='lg:w-[30%]'>
                <div className=' bg-color_main_light p-3 rounded-lg'>
                    <div className='flex gap-2'>
                    <img src={'https://i.ibb.co/x7fZytf/IMG20230601121705.jpg'} className='w-14 h-14 rounded-lg'></img>
                    <div>
                        <h1 className='text-2xl text-text_main'>{customers[activeIndex]?.name}</h1>
                        <p className='text-color_primary'>@{'siam898'}</p>
                    </div>
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-xl text-text_main'>Details:</h2>
                        <div className='space-y-2 mt-2'>
                            <h2>Email: {customers[activeIndex]?.email}</h2>
                            <h2>Contact Phone: {customers[activeIndex]?.contact_phone}</h2>
                            <h2>Joining Date: {customers[activeIndex]?.joining_date}</h2>
                            <h2>Status: <span className='px-3 py-1 text-black text-center rounded-full' style={{backgroundColor:customers[activeIndex]?.status === 'Active' ? '#cef5de' : '#f1aeb4'}}>{customers[activeIndex]?.status}</span></h2>

                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Customers;
