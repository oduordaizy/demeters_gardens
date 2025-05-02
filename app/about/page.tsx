import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const about = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl font-semibold text-center '>About Us</h1>
      <p className='mt-4 leading-relaxed text-gray-600 p-4'>At Demeter's gardens, fresh, delicious and expertly made curated healthy foods are just a small part of our story</p>

      <p>We are passionate about nature and the deep connection it fosters- there's truly no feeling like it. That's why we do more thna just grow food; we nurture a sustainable relationship with the land, ensuring every product we offer is wholesome, nutritious and full of life</p>

      <Footer/>
      </div>
  )
}

export default about