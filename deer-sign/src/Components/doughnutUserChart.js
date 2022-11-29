import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DonutUserChart =() => {
    const data = {
        labels: [
          'Completadas',
          'Sin completar'
        ],
        datasets: [{
          label: 'Actividades Completadas',
          data: [85, 15],
          backgroundColor: [
            '#04caed',
            '#d6fffe'
          ],
          hoverOffset: 4
        }]
      };

      
    return (
        <div class="user-donutchart">
            <Doughnut data = {data}/>
        </div>
    );

}

export default DonutUserChart;
