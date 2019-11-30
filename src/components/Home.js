import React from 'react'
import ReactDOM from 'react-dom'

const Home = () => {
  return (
    <div>
      <div className='mt-5 mx-4'>
        <div className='col-12 col-lg-5 col-md-5 container bg-light p-5 shadow'>
          <div className='text-center'>
            <h3>TumbleBot</h3>
            <h6 className='text-muted font-italic font-weight-normal'>Tumble dryer monitoring system</h6>
          </div>
          <br />
          <div className='pt-4 text-center'>
            <div className='py-2'>
              <i className='fas fa-plug pr-2' style={{ color: 'purple' }}/>
              <span>Dryer status: </span>
              <span style={{ color: '#004E86' }}>STATUS</span>
            </div>
            <div className='py-2'>
              <i className='fas fa-power-off pr-2' style={{ color: 'purple' }} />
              <span>Cycle status: </span>
              <span style={{ color: '#004E86' }}>FINISHED</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;