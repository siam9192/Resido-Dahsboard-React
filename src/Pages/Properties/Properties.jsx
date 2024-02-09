import { useEffect, useState } from "react";
import AxiosBase from "../../Components/Reuse/Axios/AxiosBase";
import GridCard from "../../Components/Reuse/Cards/GridCard";
const Properties = () => {
    const [properties,setProperties] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        AxiosBase().get('/admin/properties/get')
        .then(res =>  {
            setProperties(res.data);
            setLoading(false)
        })
    },[])
    return (
        <div>
            {
                loading ? <div className="py-52 text-center">
                    <span className="loading loading-ring w-32 text-color_primary"></span>
                </div>
                :
                <div className="py-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    properties.map((property,index)=>{
                       return <GridCard property={property} key={index}></GridCard>
                    })
                }
            </div>
            }
            
        </div>
    );
}

export default Properties;
