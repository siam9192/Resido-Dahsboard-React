import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Agents = () => {
    const [agents,setAgents] = useState([])
    useEffect(()=>{
        axios.get('/Json/Agents.json')
        .then(res =>{
            setAgents(res.data)
            console.log(res.data)
        })
    },[])
    return (
        <div className='py-5'>
            <div className='p-5 bg-color_main_light text-text_main rounded-lg flex justify-between items-center'>
                <h1 className='text-2xl text-text_main'>All Agents</h1>
                <div><button className=' bg-color_primary py-2 px-4 text-white rounded-lg'>+ Add Agent</button></div>
            </div>
            <div className='pt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
           {
            agents.map((agent,index)=>{
                return <div className=' p-3 rounded-md bg-color_main_light space-y-3'>  
                <div className='flex gap-2'>
                    <img src="https://i.ibb.co/jyY9n9b/man1.jpg" alt="" className='w-14 h-14 rounded-md'/>
                    <h1 className=' text-xl text-white'>{agent.name}</h1>
                   
                    </div>  
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorem cumque distinctio, accusamus explicabo cum consequuntur? Iusto, explicabo molestiae! Soluta.</p>
                    <div >
                      <h1 className='py-2 border-b text-text_main'>
                        Email: {agent.email}
                      </h1>
                      <h1 className='py-2 border-b text-text_main'>
                        Phone: {agent.phone}
                      </h1>
                      <h1 className='py-2 border-b text-text_main'>
                        City: {agent.city}
                      </h1>
                      <h1 className='py-2 text-text_main'>
                        Address: {agent.address}
                      </h1>
                    </div>
                    <div className='mt-2'>
                        <button className='py-2 px-6 rounded-lg bg-color_success text-text_main'>View Profile</button>
                    </div>
                </div>
            })
           }
            </div>
        </div>
    );
}

export default Agents;
