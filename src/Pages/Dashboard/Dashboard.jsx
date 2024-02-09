import React from 'react';
import PieChart from '../../Components/PieChart/PieChart';
import CustomerReviews from '../../Components/CustomerReviews/CustomerReviews';
import RecentCustomers from '../../Components/RecentCustomers/RecentCustomers';
import RevenueProgress from '../../Components/RevenueProgress/RevenueProgress';
import Overview from '../../Components/Overview/Overview';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
    const propertyStatus = [
        {
          name:'Property Viewed',
          type:'Views',
          target: 1000,
          value:580
        },
        {
          name:'Property Listed',
          type:'listing',
          target: 1500,
          value:980
        },
        {
          name:'Review',
          type:'Reviews',
          target: 2000,
          value:1900
        }
      ]
    return (
        <div>
        <div className="flex justify-between items-center">
        <h1 className="text-3xl  text-text_main font-bold">Dashboard</h1>
        <h1 className="text-x text-text_main font-semibol">Dashboard / <span className="text-color_primary">{'Dashboard'}</span></h1>
        
        </div>
       <div className="space-y-5">
       <div className="card-container py-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
           <div className=" bg-color_main_light rounded-xl flex items-center justify-between  p-5">
            <div className=" space-y-2">
              <p className=" text-text_main font-semibold   ">
     Properties for Sale
     </p>
     <h1 className="text-4xl text-text_main text-center font-bold">684</h1>
       </div>
     
            <div>
            <svg class="peity" height="5.75rem" width="5.75rem"><path d="M 40.25 0 A 40.25 40.25 0 0 1 80.5 40.25 L 60.375 40.25 A 20.125 20.125 0 0 0 40.25 20.125" data-value="2" fill="#216fed"></path><path d="M 80.5 40.25 A 40.25 40.25 0 1 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 1 0 60.375 40.25" data-value="20" fill="rgba(242, 246, 252)"></path></svg>
             </div>
           </div>
           <div className=" bg-color_main_light rounded-xl flex items-center justify-between  p-5">
            <div className=" space-y-2">
              <p className=" text-text_main font-semibold   ">
     Properties for Rent
     </p>
     <h1 className="text-4xl text-text_main text-center font-bold">984</h1>
       </div>
     
            <div>
            <svg class="peity" height="5.75rem" width="5.75rem"><path d="M 40.25 0 A 40.25 40.25 0 0 1 80.5 40.25 L 60.375 40.25 A 20.125 20.125 0 0 0 40.25 20.125" data-value="2" fill="rgb(56, 226, 93,1)"></path><path d="M 80.5 40.25 A 40.25 40.25 0 1 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 1 0 60.375 40.25" data-value="6" fill="rgba(242, 246, 252)"></path></svg>
             </div>
           </div>
           <div className=" bg-color_main_light rounded-xl flex items-center justify-between  p-5">
            <div className=" space-y-2">
              <p className=" text-text_main font-semibold   ">
     Total Customers
     </p>
     <h1 className="text-4xl text-text_main text-center font-bold">12084</h1>
       </div>
     
            <div>
            <svg class="peity" height="5.75rem" width="5.75rem"><path d="M 40.25 0 A 40.25 40.25 0 0 1 80.5 40.25 L 60.375 40.25 A 20.125 20.125 0 0 0 40.25 20.125" data-value="2" fill="#ffa755"></path><path d="M 80.5 40.25 A 40.25 40.25 0 1 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 1 0 60.375 40.25" data-value="6" fill="rgba(242, 246, 252)"></path></svg>
             </div>
           </div>
           <div className=" bg-color_main_light rounded-xl flex items-center justify-between  p-5">
            <div className=" space-y-2">
              <p className=" text-text_main font-semibold   ">
     Total agents
     </p>
     <h1 className="text-4xl text-text_main text-center font-bold">30</h1>
       </div>
     
            <div>
            <svg class="peity" height="5.75rem" width="5.75rem"><path d="M 40.25 0 A 40.25 40.25 0 0 1 80.5 40.25 L 60.375 40.25 A 20.125 20.125 0 0 0 40.25 20.125" data-value="2" fill="#212130"></path><path d="M 80.5 40.25 A 40.25 40.25 0 1 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 1 0 60.375 40.25" data-value="6" fill="rgba(242, 246, 252)"></path></svg>
             </div>
           </div>
      
           
         </div>
      
       <div className="flex lg:flex-row flex-col gap-5">
         <div className="lg:w-[70%] space-y-5">
           <RevenueProgress></RevenueProgress>
           <PieChart></PieChart>
           <Overview></Overview>
         </div>
       <div className="lg:w-[30%] space-y-5">
       <div className=" h-fit bg-color_main_light rounded-xl space-y-4 p-5">
     
     {
       propertyStatus.map((item,index)=>{
        return <div className="space-y-2" key={index}>
         <div className="flex justify-between items-center">
         <h2 className="font-semibold text-text_main">{item.name}</h2> <h4 className="text-text_light text-[14px]">{item.value} {item.type}</h4>
         </div>
         <div className="bg-color_main rounded-l-full rounded-r-full">
           <div className=" bg-color_primary md:py-2 p-1 rounded-l-full rounded-r-full" style={{width:`${(item.value/item.target)*100}%`}}></div>
         </div>
         </div>
       })
     }
     
         </div>
        <CustomerReviews></CustomerReviews>
        <RecentCustomers></RecentCustomers>
       </div>
       </div>
       </div>
     
        </div>
    );
}

export default Dashboard;
