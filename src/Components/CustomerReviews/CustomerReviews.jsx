import axios from "axios";
import { useEffect, useState } from "react";
// import Rating from "react-rating";
import { IoMdStar } from "react-icons/io";
import { MdStarBorder } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

const CustomerReviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        axios.get('/Json/Reviews.json')
        .then(res=>{
            setReviews(res.data)
        })
    },[])
    return (
        <div className=" h-fit bg-color_main_light rounded-xl space-y-4 p-5">
    <div className="flex justify-between
     items-center">
       <h1 className="text-xl text-text_main font-semibold">Customer Review</h1>
       <div className="text-white">
      <SlOptionsVertical></SlOptionsVertical>
       </div>
     </div>
     <div className="pt-3 space-y-6">
        {
            reviews.slice(0,3).map((review,index)=>{
                return <div className="space-y-2 border-b pb-2 border-text_light" key={index}>
                    <div className="flex justify-between items-center">
                       <div className="flex gap-2">
                        <img src={review.image} className="w-14 h-14 rounded-xl"/>
                       <div className="space-y-1">
                        <h1 className="text-xl text-text_main">{review.name}</h1>
                        <p>{5} min ago</p>
                       </div>

                       </div>
                     <div className="text-xl text-color_action_light">
                     {/* <Rating
  initialRating={3.5}
  emptySymbol={<MdStarBorder></MdStarBorder>}
  fullSymbol={<IoMdStar></IoMdStar>}
  readonly
/> */}
                     </div>
                    
                    </div>
                    <p>{review.review_text.slice(0,120)}...</p>
                  
                </div>
            })
            
        }
        <div>
            <button className="w-full py-3 bg-color_primary text-white rounded-xl">See More Reviews</button>
        </div>
     </div>
    </div>
    );
}

export default CustomerReviews;
