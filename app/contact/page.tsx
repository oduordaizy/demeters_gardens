"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-[#1d4d4f]">
        <section className="px-6 py-20 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="text-center text-lg text-[#357376] mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p>We&apos;d love to hear from you! Whether you have a question about our products, delivery, or just want to say hi.</p>
          </motion.p>

          <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
            <div>
              <label className="block font-semibold mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6ba8a9]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6ba8a9]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6ba8a9]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6ba8a9] text-white font-semibold py-3 rounded hover:bg-[#357376] transition"
            >
              Send Message
            </button>
          </form>

          <div className="text-center text-sm text-[#357376] mt-8">
            Or email us directly at: <a href="mailto:info@greenharvest.com" className="underline">info@demetersgardens.com</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}