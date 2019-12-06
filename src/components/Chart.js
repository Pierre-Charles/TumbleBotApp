import React from 'react'
import { Bar } from 'react-chartjs-2'
import Calendar from './Calendar'

const Chart = props => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Hours used',
        backgroundColor: 'rgba(128,0,128,0.2)',
        borderColor: 'rgba(128,0,128,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(128,0,128,0.4)',
        hoverBorderColor: 'rgba(128,0,128,1)',
        data: Object.values(props.data),
      }
    ]
  }
  return (
    <div>
      <Calendar />
      <h5 className=' p-0 text-center'>Last week's usage</h5>
      <Bar data={data} width={200} height={150} options={
        {
          maintainAspectRatio: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }]
          }
        }
      }
      />
    </div>
  )
}

export default Chart


// what will you do when data gets stored