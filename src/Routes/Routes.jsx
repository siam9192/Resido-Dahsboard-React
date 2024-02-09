import React, { useState } from 'react';
import SideNavigationBar from '../Components/SideNavigationBar/SideNavigationBar';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Routes = () => {
  const [toggle,setToggle] = useState(false);
  const handleToggle = ()=>{
    setToggle(!toggle);
  }
    return (
        <div className="flex ">
      <div className={`${toggle ? 'max-w-[0px]  overflow-hidden':'max-w-[25%] min-w-[20%]'} lg:block hidden transition-all duration-300 ease-in-out`}>
        <SideNavigationBar handleToggle = {handleToggle}></SideNavigationBar>
      </div>
      <div className="w-full h-[100vh] overflow-y-auto">
        <Navbar></Navbar>
       <div className="md:p-5 p-2 ">
       <Outlet></Outlet>
       </div>
      </div>
    </div>
  
    );
}

export default Routes;
