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
  console.log('PROPS =>', props.data)
  return (
    <div>
      <h5 className=' p-0 text-center'>Weekly usage</h5>
      <Bar data={data} options={{
      }} />
    </div>
  )
}

export default Chart


// what will you do when data gets stored