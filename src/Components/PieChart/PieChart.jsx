import { Doughnut, Pie } from 'react-chartjs-2';
import {Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement)
import { SlOptionsVertical } from 'react-icons/sl';

const PieChart = () => {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ['#216fed', '#68e365', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
    return (
        <div className=" h-fit bg-color_main_light rounded-xl space-y-4 p-5">
        <div className="flex justify-between
         items-center">
           <h1 className="text-xl text-text_main font-semibold">PieChart</h1>
           <div className="text-white">
          <SlOptionsVertical></SlOptionsVertical>
           </div>
         </div>
         <div className="pt-3 flex justify-center items-center ">
       <div className=''>
       <Doughnut data={data}></Doughnut>
       </div>
         </div>
        </div>
    );
}

export default PieChart;
