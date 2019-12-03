import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import Animation from './Animation'
import { dbConfig } from '../firebaseConfig'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Chart from './Chart'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.app = firebase.initializeApp(dbConfig)
    this.database = this.app.database().ref().child('object')
    this.state = {
      cycleStatus: '',
      dryerStatus: '',
      ldr: 0,
      sw420: 0,
      usage: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0
      },
      user: ''
    }
  }

  componentDidMount() {
    this.getSw420Values()
    this.getLdrValues()
    this.getDryerStatus()
    this.getCycleStatus()
    this.getUser()
    this.getUsage()
  }

  getSw420Values = () => {
    const sw420 = this.database.child('sw420')
    sw420.on('value', snap => {
      this.setState({
        sw420: snap.val()
      })
    })
  }

  getUsage = () => {
    const sw420 = this.database.child('usage')
    sw420.on('value', snap => {
      this.setState({
        usage: snap.val()
      })
    })
  }

  getLdrValues = () => {
    const ldr = this.database.child('ldr')
    ldr.on('value', snap => {
      this.setState({
        ldr: snap.val()
      })
    })
  }

  getDryerStatus = () => {
    const status = this.database.child('dryerStatus')
    status.on('value', snap => {
      this.setState({
        dryerStatus: snap.val()
      })
    })
  }

  getCycleStatus = () => {
    const status = this.database.child('cycleStatus')
    status.on('value', snap => {
      this.setState({
        cycleStatus: snap.val()
      })
    })
  }

  getUser = () => {
    const user = this.database.child('user')
    user.on('value', snap => {
      this.setState({
        user: snap.val()
      })
    })
  }

  render() {
    return (
      <div>
        <div className='mt-0 mx-4 mb-5'>
          <Animation />
          <div className='col-12 col-lg-6 col-md-6 container bg-light p-3 shadow'>
            <div className='text-center pt-3'>
              <h3>TumbleBot</h3>
              <h6 className='text-muted font-italic font-weight-normal'>Tumble dryer monitoring system</h6>
            </div>
            <br />
            <div className='pt-2 text-center'>
              <div className='py-2'>
                <i className='fas fa-plug pr-2' style={{ color: 'purple' }} />
                <span>Dryer status: </span>
                <span style={{ color: '#004e86' }}>{this.state.dryerStatus}</span>
              </div>
              <div className='py-2'>
                <i className='fas fa-power-off pr-2' style={{ color: 'purple' }} />
                <span>Cycle status: </span>
                <span style={{ color: '#004e86' }}>{this.state.cycleStatus}</span>
              </div>
              <div className='py-2'>
                <i className='fas fa-user pr-2' style={{ color: 'purple' }} />
                <span>Used by: </span>
                <span style={{ color: '#004e86' }}>{this.state.user}</span>
              </div>
            </div>
            <div className='row pt-5 text-center'>
              <div className='col-md-6 col-6 text-center'>
                <i className='fas fa-chart-area' style={{ color: 'purple' }} />
                <OverlayTrigger
                  key='top'
                  placement='top'
                  overlay={<Tooltip id={`tooltip-$'top`}>Readings from the light dependent resistor <b>(LDR)</b>.</Tooltip>}
                >
                  <p className='m-0'>Light:</p>
                </OverlayTrigger>
                <p style={{ color: '#004e86' }}>{this.state.ldr}</p>
              </div>
              <div className='col-md-6 col-6 text-center'>
                <i className="fas fa-cogs" style={{ color: 'purple' }} />
                <OverlayTrigger
                  key='top'
                  placement='top'
                  overlay={<Tooltip id={`tooltip-$'top`}>Readings from the vibration sensor <b>(SW-420)</b>.</Tooltip>}
                >
                  <p className='m-0'>Vibration:</p>
                </OverlayTrigger>
                <p style={{ color: '#004e86' }}>{this.state.sw420}</p>
              </div>
            </div>
            <hr />
            <div className='pt-0 pb-2'>
              <Chart data={this.state.usage} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}