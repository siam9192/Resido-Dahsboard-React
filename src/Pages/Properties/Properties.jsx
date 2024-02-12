import { useEffect, useRef, useState } from "react";
import AxiosBase from "../../Components/Reuse/Axios/AxiosBase";
import GridCard from "../../Components/Reuse/Cards/GridCard";
import { SlOptionsVertical } from "react-icons/sl";
import { MdFilterListAlt } from "react-icons/md";
const Properties = () => {
    const [properties,setProperties] = useState([]);
    const [loading,setLoading] = useState(false);
    const [activeOptionBar,setActiveOptionBar] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    const optionRef = useRef(null)
    useEffect(()=>{
        setLoading(true)
        AxiosBase().get('/admin/properties/get')
        .then(res =>  {
            setProperties(res.data);
            setLoading(false)
        })
    },[])
    useEffect(()=>{
        document.addEventListener('mousedown',handler)
        return ()=>{
            document.removeEventListener('mousedown',handler)
        }
    },[])

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const handleOptionBar = (value)=>{
    setActiveOptionBar(value)
    }

    const handler = (e)=>{
        if (optionRef.current && !optionRef.current.contains(e.target)) {
            // Click occurred outside the component, close it
         setActiveOptionBar(null)
          }
        };
    
    const arr = [1,2,3,4,5,6,7,8]
    return (
        <div>
            <div className="p-5 text-text_main">
                <div className="text-2xl flex items-center gap-2 py-3 border-b">
                <MdFilterListAlt></MdFilterListAlt>
                <h2>Filter</h2>
                </div>
            </div>
            {
                loading ? <div className="py-52 text-center">
                    <span className="loading loading-ring w-32 text-color_primary"></span>
                </div>
                :
            //     <div className="py-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
            //     {
            //         properties.map((property,index)=>{
            //            return <GridCard property={property} key={index}></GridCard>
            //         })
            //     }
            // </div>
            <table className="table">
            {/* head */}
            <thead className='bg-color_primary  text-whit py-6 rounded-l-md text-gray-50 uppercase'>
              <tr >
                <th>Title</th>
                <th>Date</th>
                <th>Views</th>
                <th>Status</th>
                <th>Action</th>r
              </tr>
            </thead>
            <tbody>
              {
                properties.map((property,index)=>{
                  return <tr className='relative bg-color_main_light text-text_main'>
               
                  <td className='flex md:flex-row flex-col gap-2'>
                    <img src={property.images[0]} className='w-32 rounded-lg' alt="" />
                    <div className='space-y-2'>
                      <h1 className='text-xl  font-semibold '>{property.title}</h1>
                    <p className=''>{property.address}</p>
                    <h1 className='text-xl  font-semibold'>${property?.propertyStatus.salePrice||property?.propertyStatus.rentAmount}</h1>
                    </div>
                  </td>
                  {
                    property.date ? 
                    <td>{property.date.day} {monthNames[property.date.month]},{property.date.year}</td>
                    :
                    <td>Missing</td>
                  }
                  <td>{property.views||0}</td>
                  <td><h2 className='py-1 px-3 bg-[#bef3cb]  text-color_success text-center rounded-full capitalize'>{property.details.approveStatus.approve_status||'pending'}</h2></td>
                   <td ><div className='text-text_main hover:text-color_action  text-end text-xl hover:cursor-pointer ' onClick={()=>activeOptionBar===index ? setActiveOptionBar(null) : handleOptionBar(index)} >
                   <SlOptionsVertical ></SlOptionsVertical> 
                   </div>
                   <div className={`bg-white text-black rounded-lg absolute top-20 h-fit right-4 z-40 shadow-md flex flex-col gap-3 p-3 -bottom-2 ${activeOptionBar===index?'block' : 'hidden'}`} ref={optionRef}>
                   <button className="hover:text-color_primary">View</button>
                    <button className="hover:text-color_primary">Pause</button>
                    <button className="hover:text-color_primary">Delete</button>
                   </div>
                   </td>
                </tr>
                
                })
              }
            
            </tbody>
          </table>
            }
            <div className="mt-5 justify-center flex items-center gap-2">
                {
                    arr.map((item,index)=>{
                      return  <div key={item} className={`${currentPage === item ? ' bg-color_primary' : ' bg-color_main_light'} px-3 py-2 rounded-lg text-text_main hover:cursor-pointer`} onClick={()=>setCurrentPage(item)}> {item}</div>
                    })
                }
            </div>
        </div>
    );
}

export default Properties;
