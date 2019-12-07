import React from 'react'
import { Bar } from 'react-chartjs-2'
import Calendar from './Calendar'

const Chart = props => {
  const data = {
    datasets: [
      {
        label: 'Pierre',
        backgroundColor: 'rgba(0,78,134,0.2)',
        borderColor: 'rgba(0,78,134,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,78,134,0.4)',
        hoverBorderColor: 'rgba(0,78,134,1)',
        data: props.data.pierreUsage.slice(1),
      },
      {
        label: 'Shanice',
        backgroundColor: 'rgba(128,0,128,0.2)',
        borderColor: 'rgba(128,0,128,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(128,0,128,0.4)',
        hoverBorderColor: 'rgba(128,0,128,1)',
        data: props.data.shaniceUsage.slice(1),
      },
      {
        label: 'Nicky',
        backgroundColor: 'rgba(253,136,51,0.2)',
        borderColor: 'rgba(253,136,51,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(253,136,51,0.4)',
        hoverBorderColor: 'rgba(253,136,51,1)',
        data: props.data.nickyUsage.slice(1),

      }
    ],
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
              },
              stacked: true
            }],
            xAxes: [{ stacked: true }]
          }
        }
      }
      />
    </div>
  )
}

export default Chart


// what will you do when data gets stored