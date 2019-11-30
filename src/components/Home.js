import React from 'react'
import ReactDOM from 'react-dom'
import Animation from './Animation'

const Home = () => {
  return (
    <div>
      <div className='mt-5 mx-4'>
        <Animation />
        <div className='col-12 col-lg-5 col-md-5 container bg-light p-5 shadow'>
          <div className='text-center'>
            <h3>TumbleBot</h3>
            <h6 className='text-muted font-italic font-weight-normal'>Tumble dryer monitoring system</h6>
          </div>
          <br />
          <div className='pt-2 text-center'>
            <div className='py-2'>
              <i className='fas fa-plug pr-2' style={{ color: 'purple' }} />
              <span>Dryer status: </span>
              <span style={{ color: '#004e86' }}>STATUS</span>
            </div>
            <div className='py-2'>
              <i className='fas fa-power-off pr-2' style={{ color: 'purple' }} />
              <span>Cycle status: </span>
              <span style={{ color: '#004e86' }}>FINISHED</span>
            </div>
            <div className='py-2'>
              <i className='fas fa-user pr-2' style={{ color: 'purple' }} />
              <span>Used by: </span>
              <span style={{ color: '#004e86' }}>USER</span>
            </div>
          </div>
          <div className='row pt-5 text-center'>
            <div className='col-md-6 col-6 text-center'>
              <i className='fas fa-chart-area' style={{ color: 'purple' }} />
              <p className='m-0'>LDR</p>
              <p style={{ color: '#004e86' }}>%LDR%</p>
            </div>
            <div className='col-md-6 col-6 text-center'>
              <i className="fas fa-cogs" style={{ color: 'purple' }} />
              <p className='m-0'>SW-420:</p>
              <p style={{ color: '#004e86' }}>%SW420%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;