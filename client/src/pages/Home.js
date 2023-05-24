import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'

const Home = () => {
  return (
    <div className='home'>
      <Announcement />
      <Navbar />
    </div>
  )
}

export default Home