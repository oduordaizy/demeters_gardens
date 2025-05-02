"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Link from "next/link";
import products from "./data/products";
import testimonials from "./data/testimonials";
import { motion } from 'framer-motion';

export default function Home() {
  console.log({ Navbar, Footer, products, testimonials, motion });
  return (
    <>
      <Navbar/>
      <main className="min-h-screen">
        <section className="text-center py-20 px-6 ">
          <h1 className="text-5xl font-bold mb-4">Nature's Goodness Delivered to you</h1>
          <p className="max-w-xl mx-auto text-lg text-[#357376] mb-6">
          Discover our range of premium, eco-friendly organic products designed to nourish your body and the planet.
          </p>
          <Link href="/products">
          <button className="bg-[#6ba8a9] text-black px-6 py-3 rounded-md hover:bg-[#357376] transition">
            Explore Products
          </button>
        </Link>
        </section>

        {/* About Section */}
      <section className="px-6 py-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-[#1d4d4f]">Our Commitment</h2>
        <p className="text-[#357376] ">
          At GreenHarvest Organics, we believe in the power of pure, chemical-free products. Our mission is to promote healthy living through transparency, sustainability, and natural ingredients.
        </p>
      </section>

      {/* Featured Products */}
      <section className="bg-[#1d4d4f] px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#f4e9d8]" >Featured Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <div key={index} className="bg-[#f4e9d8] text-[#1c5d3b] p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image src={product.image} alt={product.name} width={400} height={300} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-sm my-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span>{product.price}</span>
                <Link href="/products">
                  <button className="bg-[#4caf50] text-white px-3 py-1 rounded hover:bg-[#357376]">View</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
   

      <section className="px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic mb-4">"{testimonial.feedback}"</p>
              <p className="text-right font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

       {/* CTA */}
       <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Join Our Green Movement</h2>
        <p className="text-[#d8e3de] mb-6">
          Be part of the change. Choose organic. Live sustainably.
        </p>
        <Link href="/contact">
          <button className="bg-[#6ba8a9] text-black px-6 py-3 rounded hover:bg-[#1d4d4f] transition">
            Get in Touch
          </button>
        </Link>
      </section>



      </main>
      <Footer/>
    </>
  );
}
