
import { CgMenuLeft } from "react-icons/cg";
import { BsFillGridFill } from "react-icons/bs";
import { FaHouseCrack } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { FaUserCheck } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import axios from 'axios';
import { TbGitPullRequestClosed } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
const SideNavigationBar = ({ handleToggle}) => {
    const {pathname} = useLocation();
    const routes = [
        {
        "displayName":"Dashboard",
        "path": "/",
         "icon":<BsFillGridFill></BsFillGridFill>
        },
        {
            "displayName":"Properties",
            "path": "/properties",
             "icon":<FaHouseCrack></FaHouseCrack>
            },
            {
                "displayName":"Customers",
                "path": "/customers",
                 "icon":<ImUsers></ImUsers>
                },
                {
                    "displayName":"Agents",
                    "path": "/agents",
                     "icon":<FaUserCheck></FaUserCheck>
                    },
                    {
                        "displayName":"Role Applications",
                        "path": "/role/applications",
                         "icon":<TbGitPullRequestClosed></TbGitPullRequestClosed>
                    },
                    // {
                    //     "displayName":"Transitions",
                    //     "path": "/transitions",
                    //      "icon":<FaDollarSign></FaDollarSign>
                    //     },
                        {
                            "displayName":"Reviews",
                            "path": "/reviews",
                             "icon":<AiOutlineFileSearch></AiOutlineFileSearch>
                            }
        
    ]
    return (
        <div className='h-full bg-color_main_light sticky top-0 z-40 py-5'>
            <div className='flex justify-between items-center text-text_main'>
               <div className='flex items-center gap-3'>
             <img src='/images/resido-logo.png' alt="" className="w-20" />
               <h1 className='text-4xl text-text_main font-bold'>Resido</h1>
               </div>
               <div className='text-3xl text-text_main' onClick={handleToggle}>
                <CgMenuLeft></CgMenuLeft>
               </div>
            </div>
            <div className=' pt-10'>
                {
                    routes.map((route,index)=>{
                    return  <Link to={route.path} key={index}>
                      <div className='relative py-5  px-10'>
                           <div className={`flex gap-3 items-center text-xl font-semibold ${route.path === pathname? 'text-color_primary' : 'text-text_main'}`}>
                         <div>{route.icon}</div>   <h1>{route.displayName}</h1>
                           </div>
                           <div className={`absolute w-8 h-full bg-color_primary -left-6 top-0 rounded-lg ${pathname === route.path ? 'block' : 'hidden'}`}></div>
                        </div>
                    </Link>
                    })
                }
            </div>
        </div>
    );
}

export default SideNavigationBar;
