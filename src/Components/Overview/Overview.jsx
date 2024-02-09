import { Line } from 'react-chartjs-2';
import { SlOptionsVertical } from 'react-icons/sl';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
const Overview = () => {
    const randomNumber = ()=>{
        return parseInt(Math.random()*100)
    }
    const months =  [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    const data = {
        labels: months,
        datasets: [
          {
            label: 'Sale',
            data: months.map(item=> randomNumber()),
            borderColor: '#216fed',
            borderWidth: 6,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointRadius: 5,
            pointHoverRadius: 8,
            
          },
          {
            label: 'Rent',
            data: months.map(item=> randomNumber()),
            borderColor: '#ffa755',
            borderWidth: 6,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointRadius: 5,
            pointHoverRadius: 8,
          },
        ],
      };
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    
    return (
        <div className=" h-fit bg-color_main_light rounded-xl space-y-4 p-5">
        <div className="flex justify-between
         items-center">
           <h1 className="text-xl text-text_main font-semibold">Overview</h1>
           <div className="text-white">
          <SlOptionsVertical></SlOptionsVertical>
           </div>
         </div>
         <Line data={data} options={options}></Line>
        </div>
    );
}

export default Overview;
