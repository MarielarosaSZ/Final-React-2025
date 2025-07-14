import { Bar } from 'react-chartjs-2';
import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend); 

function Stats(props ) {
  const data = {
  labels: ['Precio Mínimo', 'Precio Promedio', 'Precio Máximo'] ,
  datasets: [
    {
    label: [ ],
      data: [props.min, props.prom, props.max],
      backgroundColor: ['#4b15bb', '#aca3af', '#11d5db',]
    },
     ],
};
 const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "PRECIOS" },
    },
    scales: {
      x: {
        grid: { color: "#555555" },
        ticks: { color: "#444444" },
      },
      y: {
        grid: { color: "#555555" },
        ticks: {
          color: "#444444",
          
          min: 0,
          max: 300,
        },
      },
    },
  };


return (
    <>
      <div className=" border p-8 m-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Estadísticas de Productos</h2>
        <p>Total de Productos: {props.total}</p>
        <p>Precio Maximo: {props.max}</p>
        <p>Precio Mínimo: {props.min}</p>
        <p>Precio Promedio: {props.prom}</p>
      </div>

      <div className='m-40 p-40 border rounded-lg shadow-lg '> 
        <Bar data={data} options={options} />
      </div>
    </>
  );
}
export default Stats;