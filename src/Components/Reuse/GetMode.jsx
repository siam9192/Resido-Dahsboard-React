import React, { useEffect, useState } from 'react';

const GetMode = () => {
    const [mode,setMode] = useState([]);
    useEffect(()=>{
        const data = localStorage.getItem('mode')
        if(!data){
            setMode('dark')
            localStorage.setItem('mode','dark')
        }
        else{
            setMode(data)
        }
    },[localStorage.getItem('mode')])
   return mode;
}

export default GetMode;
