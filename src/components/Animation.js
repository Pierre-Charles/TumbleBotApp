import React from 'react'
import Lottie from 'react-lottie'
import animation from '../assets/animations/cBot.json'

const Animation = () => {
  return (
    <div className='pt-5'>
      <Lottie
        options={{
          animationData: animation,
          autoplay: true,
          loop: true,
        }}
        height={180}
        width={'auto'}
      />
    </div>
  )
}

export default Animation;