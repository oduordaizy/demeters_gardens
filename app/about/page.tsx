"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-[#1d4d4f] px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-10">
          <motion.h1
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-center text-lg text-[#357376] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            At Demeter&apos;s Gardens, fresh, delicious, and expertly curated healthy foods are just a small part of our story.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-semibold">Our Philosophy</h2>
              <p>
                We are deeply passionate about nature and the meaningful connection it inspires. That&apos;s why we don&apos;t just grow food—we cultivate a sustainable relationship with the land.
              </p>
              <p>
                Every product we offer is grown or sourced with care, ensuring it&apos;s nutritious, fresh, and full of life. Our practices are grounded in eco-conscious values, supporting both health and the environment.
              </p>
            </motion.div>

            <motion.div
              className="rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[500px] object-cover"
              >
                <source src="farmers.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Why Choose Us</h2>
            <ul className="grid md:grid-cols-3 gap-6 text-center text-[#357376]">
              <li className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">🌱 100% Organic</h3>
                <p>No chemicals, no shortcuts—just nature&apos;s best.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">🚜 Local & Sustainable</h3>
                <p>We support local farmers and eco-friendly farming.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">🤝 Transparent & Ethical</h3>
                <p>Honesty in sourcing and a community-first approach.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;