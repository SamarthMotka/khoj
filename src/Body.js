import React from 'react'
import intro from './assets/intro.mp4'

const Body = () => {
  return (
    <div>
      <div className='videoContainer relative w-[100%] h-[100vh] overflow-hidden'>
      <video autoPlay muted loop src={intro} type= 'video/mp4' className='absolute top-0 left-0 w-[100%] h-[100%]
      object-cover
      '></video>
      </div>
    </div>
  )
}

export default Body