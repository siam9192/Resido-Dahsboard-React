import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Routes from '../Routes/Routes';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Properties from '../Pages/Properties/Properties';
import Customers from '../Pages/Customers/Customers';


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
            }
        ]
    }
   ])


export default Router;
