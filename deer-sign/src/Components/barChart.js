import React from "react";
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';

const BarChart =() => {
    
    const labels = [
        'January',
        'February',
        'March',
      ];
    const data2 = {
      labels: labels,
      datasets: [{
        indexAxis: 'y',
        data: [65, 59, 80],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1
      }]
    };

    return (
        <div className="bar-chart-container">
            <Bar data={data2}
          options={{
            title:{
              display:true,
              indexAxis: 'y',
              text:'Bar Data Chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}/>
        </div>
    );
};

export default BarChart;