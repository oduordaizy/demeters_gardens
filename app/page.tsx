"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Link from "next/link";
import products from "./data/products";
import testimonials from "./data/testimonials";
import { motion } from "framer-motion";
import HeroSlider from "./components/HeroSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  { name: "Vegetables", image: "/categories/vegetables.jpeg" },
  { name: "Fruits", image: "/categories/fruits.jpeg" },
  { name: "Butchery", image: "/categories/butchery.jpeg" },
  { name: "Pastries", image: "/categories/pastries.jpeg" },
  { name: "Pre-cooked foods", image: "/categories/precooked.jpeg" },
  { name: "Spices and Herbs", image: "/categories/spices.jpeg" },
  { name: "Herbal Tea", image: "/categories/herbaltea.jpeg" },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSlider />

        <section className="py-16 px-4 sm:px-6 relative">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-[#1d4d4f]">
        Popular Categories
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
      >
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="min-w-[200px] flex-shrink-0 text-center"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={150}
              className="rounded-lg shadow hover:scale-105 transition-transform object-cover h-40 w-52"
            />
            <p className="mt-2 text-lg font-medium text-[#1d4d4f]">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>

    {/* See More Button */}
    <div className="text-center mt-8">
        <Link href="/products">
          <button className="bg-[#4caf50] text-white px-6 py-2 rounded hover:bg-[#1c5d3b] transition">
            See More Products
          </button>
        </Link>
      </div>

        {/* Premium Packages */}
        <section className="py-16 text-[#1d4d4f] px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10 text-[#1c5d3b]">
              Premium Packages
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12">
              Choose from our specially curated organic subscription packages
              designed to fit your lifestyle and health goals.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {/* Package 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
                <Image
                  src="/packages/premium1.jpg"
                  alt="Hello Fresh"
                  width={600}
                  height={300}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-semibold text-[#1c5d3b] mb-2">
                  Hello Fresh
                </h3>
                <ul className="list-disc pl-5 text-[#1d4d4f] mb-4 space-y-2">
                  <li>Hand-picked groceries and pastries</li>
                  <li>Farm-fresh eggs, milk, and honey</li>
                  <li>Delicious baked goodies</li>
                  <li>Fresh fruits, vegetables, cereals, and meats</li>
                  <li>1-week smoothie kit</li>
                  <li>Nourishes your body, mind, and soul</li>
                </ul>
                <button className="bg-[#4caf50] text-white px-4 py-2 rounded hover:bg-[#1c5d3b]">
                  Get Started
                </button>
              </div>

              {/* Package 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
                <Image
                  src="/packages/premium2.jpg"
                  alt="Whole30"
                  width={600}
                  height={300}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-semibold text-[#1c5d3b] mb-2">
                  Whole30
                </h3>
                <ul className="list-disc pl-5 text-[#1d4d4f] mb-4 space-y-2">
                  <li>Whole, unprocessed foods for 30 days</li>
                  <li>Includes meats, fruits, and vegetables</li>
                  <li>Healthy fats, nuts, and seeds</li>
                  <li>Immune-boosting teas and pre-cooked meals</li>
                  <li>Organic grains for natural energy</li>
                  <li>Improves digestion, sleep, mood & focus</li>
                </ul>
                <button className="bg-[#4caf50] text-white px-4 py-2 rounded hover:bg-[#1c5d3b]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 sm:px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-[#1d4d4f]">
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
        <section className="text-center py-16 px-4 sm:px-6">
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
