"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider() {
  const slides = [
    {
      image: "bg_images/bg1.jpeg",
      heading: "Nature’s Goodness Delivered",
      subtext: "Organic. Fresh. Nutritious.",
    },
    {
      image: "bg_images/bg2.jpeg",
      heading: "Support Local Farmers",
      subtext: "Empowering sustainable communities.",
    },
    {
      image: "bg_images/bg3.jpeg",
      heading: "Clean Eating Starts Here",
      subtext: "Choose health, choose Demeter’s.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[index].image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black/40 text-white text-center px-4">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[index].heading}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {slides[index].subtext}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
