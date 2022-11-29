import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DonutChart =() => {
    const data = {
        labels: [
          'Completadas',
          'Sin completar'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [45, 55],
          backgroundColor: [
            '#f3b70b',
            '#fedea4'
          ],
          hoverOffset: 4
        }]
      };

      
    return (
        <div class="doughnut-chart-container">
            <Doughnut data = {data}/>
        </div>
    );

}

export default DonutChart;
