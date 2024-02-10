import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Routes from '../Routes/Routes';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Properties from '../Pages/Properties/Properties';
import Customers from '../Pages/Customers/Customers';
import Reviews from '../Pages/Reviews/Reviews';
import Agents from '../Pages/Agents/Agents';


   const Router = createBrowserRouter([
    {
        path:'/',
        element:<Routes></Routes>,
        children:[
            {
                path:'/',
            element:<Dashboard></Dashboard>
            },
            {
                path:'/properties',
                element:<Properties></Properties>
            },
            {
                path:'/customers',
                element:<Customers></Customers>
            },
            {
                path:'/reviews',
                element:<Reviews></Reviews>
            },
            {
                path:'/agents',
                element:<Agents></Agents>
            }
        ]
    }
   ])


export default Router;
