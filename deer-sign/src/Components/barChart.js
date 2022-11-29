import React from "react";
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';

const BarChart =() => {
    
    const labels = [
        'MAX',
        'AVG',
        'MIN',
      ];
    const data2 = {
      labels: labels,
      datasets: [{
        indexAxis: 'y',
        data: [85, 45, 10],
        fill: false,
        backgroundColor: [
          '#08306b',
          '#08779c',
          '#21aeb5',
        ],
        borderColor: [
          '#08306b',
          '#08779c',
          '#21aeb5'
        ],
        borderWidth: 1
      }]
    };

    return (
        <div className="bar-chart-container">
            <Bar data={data2}
          options={{
            title:{
              indexAxis: 'y',
              text:'Bar Data Chart',
              fontSize:20
            },
            legend:{
              position:'right'
            }
          }}/>
        </div>
    );
};

export default BarChart;