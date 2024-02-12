import { useState } from "react";

const RevenueProgress = () => {
    const [activeTab,setActiveTab] = useState(0)
    const tabs = ['monthly','weekly','today'];
     const handleTab = (index)=>{
        setActiveTab(index)
     }
     const array = [
        {
            date:'0'+6,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:'0'+7,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:'0'+8,
            value:parseInt(Math.random()*1000000)
        }
        ,
        {
            date:'0'+9,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:10,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:11,
            value:parseInt(Math.random()*1000000)
        }
        ,
        {
            date:12,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:13,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:14,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:15,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:16,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:17,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:18,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:19,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:20,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:21,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:22,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:23,
            value:parseInt(Math.random()*1000000)
        },
        {
            date:24,
            value:parseInt(Math.random()*1000000)
        }
     
     ]
    return (
        <div className='p-5 bg-color_main_light rounded-xl w-full'>
      <div className='flex justify-between items-center'>
      <h1 className='text-text_main text-2xl font-semibold'>Total Revenue</h1>
      <div className='flex items-center gap-2'>
   {
    tabs.map((tab,index)=>{
        return <div className={`capitalize text-text_main  md:text-xl pb-1 hover:cursor-pointer ${activeTab===index ? 'border-b-4  border-color_primary' : ''}`} key={index} onClick={()=>handleTab(index)}>{tab}</div>
    })
   }
      </div>
    
      </div>
      <div className="pt-5">
       <h1 className="md:text-4xl text-2xl text-text_main font-bold">${290890}</h1>
      </div>

      <div className="flex gap-2 pt-10 min-h-52">
        <div className="flex flex-col justify-between h-[80%] text-text_light text-center">
            <p>1000K</p>
            <p>800K</p>
            <p>600K</p>
            <p>400K</p>
            <p>200K</p>
            <p>0K</p>


        </div>
<div className="flex gap-5 w-full overflow-x-scroll">
    {
        array.map((item,index)=>{
            return <div>
                <div className="h-[80%] w-2 bg-color_main rounded-t-full rounded-b-full  rotate-180">
                <div className={`w-full bg-color_primary rounded-b-full rounded-t-full`} style={{height:`${(item.value/400000)*100}%`}}>
                    
                </div>
            </div>
            <h4 className="text-[10px] mt-2">{item.date}</h4>
            </div>
        })
    }
</div>
      </div>

        </div>
    );
}

export default RevenueProgress;
