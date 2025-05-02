import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl font-semibold mt-12 text-center'>Let&apos;s Connect!</h1>
      <p className='mt-4 text-gray-700 p-3'>Have a project in mind or just want to say hi? I’d love to hear from you.</p>

      <Footer/> 
    </div>
  )
}

export default page