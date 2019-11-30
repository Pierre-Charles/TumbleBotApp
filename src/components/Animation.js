import React from 'react'
import Lottie from 'react-lottie'
import animation from '../assets/animations/cBot.json'

const Animation = () => {
  return (
    <div className='pt-3 animation'>
      <Lottie
        options={{
          animationData: animation,
          autoplay: true,
          loop: true,
        }}
        height={130}
        width={'auto'}
      />
    </div>
  )
}

export default Animation;