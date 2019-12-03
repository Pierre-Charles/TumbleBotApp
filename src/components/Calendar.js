import React from 'react'
import Lottie from 'react-lottie'
import animation from '../assets/animations/calendar.json'

const Calendar = () => {
  return (
    <div className=''>
      <Lottie
        options={{
          animationData: animation,
          autoplay: true,
          loop: true,
        }}
        height={60}
        width={'auto'}
      />
    </div>
  )
}

export default Calendar;