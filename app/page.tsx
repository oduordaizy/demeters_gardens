"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Link from "next/link";
import products from "./data/products";
import testimonials from "./data/testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="text-center px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-b from-[#6ba8a9] to-[#1d4d4f] text-white">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           <p>Nature &apos; s Goodness Delivered to You</p> 
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-base sm:text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover premium, eco-friendly organic products designed to nourish
            your body and support sustainable living.
          </motion.p>
          <Link href="/products">
            <button className="bg-white text-[#1d4d4f] font-semibold px-6 py-3 rounded-md hover:bg-[#f4e9d8] transition">
              Shop Now
            </button>
          </Link>
        </section>

        {/* Featured Products */}
        <section className="bg-[#1d4d4f] px-4 sm:px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-[#f4e9d8]">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 3).map((product, index) => (
              <div
                key={index}
                className="bg-[#f4e9d8] text-[#1c5d3b] p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-sm my-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium">{product.price}</span>
                  <Link href="/products">
                    <button className="bg-[#4caf50] text-white px-3 py-1 rounded hover:bg-[#357376]">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 sm:px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="italic mb-4">&quot;{testimonial.feedback}&quot;</p>
                <p className="text-right font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-4 sm:px-6 bg-[#e5f3ec]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our Green Movement
          </h2>
          <p className="text-[#1d4d4f] mb-6 max-w-xl mx-auto">
            Be part of the change. Choose organic. Live sustainably.
          </p>
          <Link href="/contact">
            <button className="bg-[#6ba8a9] text-black px-6 py-3 rounded hover:bg-[#1d4d4f] hover:text-white transition">
              Get in Touch
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
