import React from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2'

const Chart = props => {
  console.log(props.data)
  console.log(Object.values(props.data))
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
      <h5 className=' p-0 text-center'>Last week's usage</h5>
      <Bar data={data} wdith={100} height={200} options={
        {
          maintainAspectRatio: true,
          scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true
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