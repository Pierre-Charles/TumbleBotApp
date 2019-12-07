import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase/app'
import Animation from './Animation'
import { dbConfig } from '../firebaseConfig'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Chart from './Chart'
import moment from 'moment'

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
        pierreUsage: [0, 0, 0, 0, 0, 0, 0],
        shaniceUsage: [0, 0, 0, 0, 0, 0, 0],
        nickyUsage: [0, 0, 0, 0, 0, 0, 0]
      },
      user: '',
      cycleStartTime: '0000-00-00T00:00:00Z',
      cycleEndTime: '0000-00-00T00:00:00Z'
    }
  }

  componentDidMount() {
    this.getSw420Values()
    this.getLdrValues()
    this.getDryerStatus()
    this.getCycleStatus()
    this.getUser()
    this.getUsage()
    this.getStartTime()
    this.getEndTime()
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

  getStartTime = () => {
    const startTime = this.database.child('cycleStartTime')
    startTime.on('value', snap => {
      this.setState({
        cycleStartTime: snap.val()
      })
    })
  }

  getEndTime = () => {
    const endTime = this.database.child('cycleEndTime')
    endTime.on('value', snap => {
      this.setState({
        cycleEndTime: snap.val()
      })
    })
  }

  render() {
    const { cycleStartTime, cycleEndTime, dryerStatus, cycleStatus, user, ldr, sw420, usage } = this.state
    return (
      <div>
        <div className='mt-0 mx-4 mb-5'>
          <Animation />
          <div className='col-12 col-lg-5 col-md-7 container bg-light p-3 shadow'>
            <div className='text-center pt-3'>
              <h1 className='h3'>TumbleBot</h1>
              <h2 className='h6 text-muted font-italic font-weight-normal'>Tumble dryer monitoring system</h2>
            </div>
            <br />
            <div className='pt-2 text-center'>
              <div className='py-2'>
                <i className='fas fa-plug pr-2' style={{ color: 'purple' }} />
                <span>Dryer status: </span>
                <span style={{ color: '#004e86' }}>{dryerStatus}</span>
              </div>
              <div className='py-2'>
                <i className='fas fa-power-off pr-2' style={{ color: 'purple' }} />
                <span>Cycle status: </span>
                <span style={{ color: '#004e86' }}>{cycleStatus}</span>
              </div>
              <div className='py-2'>
                <i className='fas fa-clock pr-2' style={{ color: 'purple' }} />
                <span>Last used on: </span>
                <span style={{ color: '#004e86' }}>{moment(cycleStartTime).format("MMM Do YY @ HH:mm")}</span>
              </div>
              <div className='py-2'>
                <i className='fas fa-user pr-2' style={{ color: 'purple' }} />
                <span>Used by: </span>
                <span style={{ color: '#004e86' }}>{user}</span>
              </div>
            </div>
            <div className='row pt-5 text-center px-0'>
              <div className='col-md-6 col-6 text-center'>
                <i className='fas fa-chart-area' style={{ color: 'purple' }} />
                <OverlayTrigger
                  key='top'
                  placement='top'
                  overlay={<Tooltip id={`tooltip-$'top`}>Readings from the light dependent resistor <b>(LDR)</b>.</Tooltip>}
                >
                  <p className='m-0'>Light:</p>
                </OverlayTrigger>
                <p style={{ color: '#004e86' }}>{ldr}</p>
              </div>
              <div className='col-md-6 col-6 text-center px-0'>
                <i className="fas fa-cogs" style={{ color: 'purple' }} />
                <OverlayTrigger
                  key='top'
                  placement='top'
                  overlay={<Tooltip id={`tooltip-$'top`}>Readings from the vibration sensor <b>(SW-420)</b>.</Tooltip>}
                >
                  <p className='m-0'>Vibration:</p>
                </OverlayTrigger>
                <p style={{ color: '#004e86' }}>{sw420}</p>
              </div>
            </div>
            <hr className='mt-4' />
            <div className='pt-0 pb-2'>
              <Chart data={usage} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
