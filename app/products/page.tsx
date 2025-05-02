import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import products from '../data/products'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className=" min-h-screen text-[#f1f8f5] px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Organic Products</h1>
      <p className="text-center max-w-2xl mx-auto mb-12 text-[#1d4d4f]">
        We believe in clean, sustainable living. Explore our range of all-natural, chemical-free organic products that support your healthy lifestyle and care for the earth.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-[#f4e9d8] text-[#1c5d3b] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{product.price}</span>
              <button className="bg-[#4caf50] text-white px-4 py-2 rounded hover:bg-[#1c5d3b]">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
        <Footer/>
      </div>
  )
}

export default page